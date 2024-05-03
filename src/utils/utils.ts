export function joiErrorsIntoArray(error: string): string {
    return error.replaceAll("\"", "'");
}
