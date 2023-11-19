
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
        
        if (modoNoturnoAtivo === false) {
            modoDiurnoToggle.classList.remove('none');
            modoNoturnoToggle.classList.add('none');
            corpo.classList.remove('diurno');  // Adicionei 'diurno' para verificar o modo diurno
            corpo.classList.add('noturno');
          } else {
            modoNoturnoToggle.classList.remove('none');
            modoDiurnoToggle.classList.add('none');
            corpo.classList.remove('noturno');
            corpo.classList.add('diurno');  // Removi 'diurno' para voltar ao modo noturno
          }

        
        }

    });
        


  