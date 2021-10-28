const generator = ()=>{
    
    const block = document.querySelector('.main__checkbox'), //wrapper for check
          btnsBlock = document.querySelector('.main__btns'),//Wrapper for btns
          btnGen = document.querySelector('.main__btn'),//Btn Generate
          btnC = document.querySelector('.main__btn_copy'),//Btn Copy
          input = document.querySelector('.main__input'), //Input where password generating
          checkN = document.querySelector('.main__check_num'), //numers
          checkL = document.querySelector('.main__check_let'), //letters
          checkS = document.querySelector('.main__check_sym'), //symbols   
          capsS = document.querySelector('.main__check_caps'), 
          range = document.querySelector('.main__range'), //range (lenght)
          result = document.querySelector('.main__number');



    function generate(e) {

        let nums = '0123456789';
        let letters = 'abcdefghijklmnopqrstuvwxyz';
        let caps = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
        let specials = '!@#$%^&*()_+?><:{}[]';


        let newArr = []

        
        function checkIf(vars, content) {
            if(vars.checked === true){
                newArr.push(content)
            }
        }

        checkIf(checkN, nums)
        checkIf(checkL, letters)
        checkIf(checkS, specials)

        if(capsS.checked === true){
            newArr.push(caps)
        }


        try{
            
            const res = newArr.reduce((sum, current)=>`${sum}${current}`);

            let passwordLenght = range.value;
            let password = '';

            for (let i = 0; i < passwordLenght; i++) {
                let randomNumber = Math.floor(Math.random() * res.length);
                password += res[randomNumber]
            }

            input.value = password;


        }catch(e){
            console.log('Error')
        }


    }



    function copy(e) {
        let value = input.value
        console.log(value)

    }

    btnGen.addEventListener('click',(e)=>{
        let interval = setInterval(generate, 50)
        
        btnsBlock.classList.add('_hold');
        block.classList.add('_hold');

        setTimeout(() => {

            clearInterval(interval)//Remove interval

            btnsBlock.classList.remove('_hold');
            block.classList.add('_hold')
        }, 10000);


    })

    btnC.addEventListener('click',copy);


    
    range.addEventListener('input',function(e){
        result.textContent = range.value;
    })
    

}
export default generator;