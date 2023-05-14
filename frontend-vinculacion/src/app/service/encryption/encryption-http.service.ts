import { Injectable } from '@angular/core';
// import CryptoJS from 'crypto-js';

@Injectable({
  providedIn: 'root'
})
export class EncryptionHttpService {

  // private key = CryptoJS.enc.Hex.parse('000102030405060708090a0b0c0d0e0f');
  // private iv = CryptoJS.enc.Hex.parse('101112131415161718191a1b1c1d1e1f');

  encrypt(data: string): string {
    // const cipherText = CryptoJS.AES.encrypt(data, this.key, { iv: this.iv });
    // return cipherText.toString();
    return 'ja'
  }

  decrypt(encryptedData: string): string {
    // const bytes = CryptoJS.AES.decrypt(encryptedData, this.key, {
    //   iv: this.iv,
    // });
    // const plaintext = bytes.toString(CryptoJS.enc.Utf8);
    // return plaintext;
    return 'ah'
  }
}
