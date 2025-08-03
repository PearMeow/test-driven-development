export default function caesarCipher(str, shift) {
    return str.split("").reduce((result, curr) => {
        let charCode = curr.charCodeAt(0);
        if (
            !(charCode >= "a".charCodeAt(0) && charCode <= "z".charCodeAt(0)) &&
            !(charCode >= "A".charCodeAt(0) && charCode <= "Z".charCodeAt(0))
        ) {
            return result + curr;
        }
        let capital = false;
        if (charCode >= "A".charCodeAt(0) && charCode <= "Z".charCodeAt(0)) {
            capital = true;
            curr = curr.toLowerCase();
        }
        charCode = curr.charCodeAt(0);
        charCode -= "a".charCodeAt(0);
        charCode = (charCode + shift) % 26;
        charCode += "a".charCodeAt(0);
        let shifted = String.fromCharCode(charCode);
        if (capital === true) {
            shifted = shifted.toUpperCase();
        }
        return result + shifted;
    }, "");
}
