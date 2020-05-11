const alternatives = document.querySelectorAll('.alternative')
const questNum = document.querySelector('.number')

const questions = document.querySelectorAll('quests')


for (let alternative of alternatives) {
        alternative.addEventListener('click', function () {
            let alternativeId = alternative.getAttribute('id')
            
            const questId = questNum.getAttribute('id')
            
            if (questId == 6) {
             window.location.href = `/result`
            } else {
              window.location.href = `/quest/${questId}`
            }

            if (alternativeId == 'true') {
                let total = 0
            
                total = total + 1
                    
                return total
            }
        })
}

for (let quest of questions) {
    total = total + total
    console.log(total)
}