import CryptoJS from "crypto-js";

const secretKey = process.env.REACT_APP_SECRET;
//암호화
export const encrypt = (val) => {
    let text = val.toString();

    const data = {
        id: text,
    };

    const encrypted = CryptoJS.AES.encrypt(JSON.stringify(data), secretKey);

    let result = encrypted.toString();

    return encodeURIComponent(result);
};

//복호화
export const decrypt = (encrypted) => {
    // var decrypted = CryptoJS.AES.decrypt(
    //     encrypted.toString(),
    //     secretKey
    // ).toString();
    // console.log("de", decrypted);
    // const originalText = decrypted.toString(CryptoJS.enc.Utf8); // output: '암호화할
    // // return originalText;

    try {
        const bytes = CryptoJS.AES.decrypt(encrypted, secretKey);
        return JSON.parse(bytes.toString(CryptoJS.enc.Utf8));
    } catch (err) {
        console.error(err);
        return;
    }
};
