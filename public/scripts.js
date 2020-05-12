const alternatives = document.querySelectorAll('.alternative')
const questions = document.querySelectorAll('quests')

const questNum = document.querySelector('.number')

const tryId = questNum.getAttribute('id')

let total = 0

for (let alternative of alternatives) {
        alternative.addEventListener('click', function save() {
            let alternativeId = alternative.getAttribute('id')
            
            const questId = questNum.getAttribute('id')
            
            if (questId == 6) {
             window.location.href = `/result`
            } else {
             window.location.href = `/quest/${questId}`
            }

            if (alternativeId == 'true') {   
               let save = function setLocal() {
                total  = total + 1
                   
                localStorage.setItem('total', total)
            }
            save()
        }
        
    })
}

console.log(total)