const generator = ()=>{
    
    const btnG = document.querySelector('.main__btn'),
          btnC = document.querySelector('.main__btn_copy'),
          input = document.querySelector('.main__input'),
          checkN = document.querySelector('.main__check_num'),
          checkL = document.querySelector('.main__check_let'),
          checkS = document.querySelector('.main__check_sym');

    

    function generate(e) {
        let nums = '0123456789';
        let letters = 'abcdefghijklmnopqrstuvwxyz';
        let specials = '!@#$%^&*()_+?><:{}[]'
        
        let numsA = nums.split("");//Array with numers
        let lettersA = letters.split(""); //Array with letters
        let specialsA = specials.split(""); //Array with special symbols

        if(checkN.checked === true){
            console.log(1)
        }



        

        let finishArr = [...numsA,...lettersA, ...specialsA];
        let passwordLenght = 16;
        let password = '';

        for (let i = 0; i < passwordLenght; i++) {
            let randomNumber = Math.floor(Math.random() * finishArr.length);
            password += finishArr[randomNumber]
        }

        input.value = password;
    }

    // function generate(e) {
    //     let chars = "0123456789abcdefghijklmnopqrstuvwxyz!@#$%^&*()_+?><:{}[]";
    //     let passwordLenght = 16;
    //     let password = '';

    //     for (let i = 0; i < passwordLenght; i++) {
    //         let randomNumber = Math.floor(Math.random() * chars.length);
    //         password += chars.substring(randomNumber, randomNumber+1);
    //     }

    //     input.value = password;
    // }

    function copy(e) {
        let value = input.value
        console.log(value)

    }

    btnG.addEventListener('click',generate)
    btnC.addEventListener('click',copy)
    

}
export default generator;