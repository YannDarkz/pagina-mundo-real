
document.addEventListener('DOMContentLoaded', () => {
    const modoNoturnoToggle = document.getElementById('btnNoturno');
    const modoDiurnoToggle = document.getElementById('btnDiurno')
    
   
  
    modoNoturnoToggle.addEventListener('click', () => {
       
      toggleModoNoturno();
      
     });

     modoDiurnoToggle.addEventListener('click', () => {
    
         toggleModoNoturno();
         
        });

    function toggleModoNoturno() {
        const corpo = document.body;
        const modoNoturnoAtivo = corpo.classList.contains('noturno');
        console.log(modoNoturnoAtivo)
        
        if (modoNoturnoAtivo) {
          modoNoturnoToggle.classList.remove('none')
          modoDiurnoToggle.classList.add('none')
          corpo.classList.add('diurno')
          corpo.classList.remove('noturno')
          
          } else {
          modoNoturnoToggle.classList.add('none')
          modoDiurnoToggle.classList.remove('none')
          corpo.classList.add('noturno')
          corpo.classList.remove('diurno')

          }      
        }
    });
        


  