/*
 Originally gotten from https://github.com/bahamas10/node-include
 */

import fs from 'fs'
import autocast from 'autocast'
import strsplit from 'strsplit'

const paths = [
    '/usr/local/include',
    '/usr/include'
]

if (process.env.C_INCLUDE_PATH) paths.push(...process.env.C_INCLUDE_PATH.split(':'))

/**
 * read the file async
 */
export default function include(path) {
    const s = fs.readFileSync(path, 'utf-8')

    return parse(s)
}

/**
 * The main header parsing logic
 * takes a string of the header file
 */
function parse(s) {
    const lines = s.split('\n')
    const ret = {}

    // read the file line by line
    for (const line of lines) {
        if (line.indexOf('#define') === 0) {
            // parse the define
            const { name, value } = parseDefine(line)
            ret[name] = value
        }
    }

    return ret
}

/**
 * Internal helper function to parse #define's
 */
function parseDefine(s) {
    const [name, value] = strsplit(s, /\s+/, 4).slice(1)
    return {
        name,
        value: autocast(value)
    }
}
