const app = {};


// app.scrollDown = () => {
//     $('#scroll').click(function() {
//         $('html, body').animate({
//             scrollTop: $("#about").offset().top
//         }, 2000);

//     });
// }

// function(e) {
//     $('html, body').animate({
//       scrollTop: $(window).height()
//     }, 1200);
//   }















// Doc Init
app.init = () => {
// Start App
// Scrambling Letters Effect
    const Messenger = function(el){
        'use strict';
        let m = this;
        
        m.init = function(){
        m.codeletters = "&#*+%?£@§$";
        m.message = 0;
        m.current_length = 0;
        m.fadeBuffer = false;
        m.messages = [
            'Afua Deborah'
        ];
        
        setTimeout(m.animateIn, 100);
        };
        
        m.generateRandomString = function(length){
        let random_text = '';
        while(random_text.length < length){
            random_text += m.codeletters.charAt(Math.floor(Math.random()*m.codeletters.length));
        } 
        
        return random_text;
        };
        
        m.animateIn = function(){
        if(m.current_length < m.messages[m.message].length){
            m.current_length = m.current_length + 2;
            if(m.current_length > m.messages[m.message].length) {
            m.current_length = m.messages[m.message].length;
            }
            
            let message = m.generateRandomString(m.current_length);
            $(el).html(message);
            
            setTimeout(m.animateIn, 20);
        } else { 
            setTimeout(m.animateFadeBuffer, 20);
        }
        };
        
        m.animateFadeBuffer = function(){
        if(m.fadeBuffer === false){
            m.fadeBuffer = [];
            for(let i = 0; i < m.messages[m.message].length; i++){
            m.fadeBuffer.push({c: (Math.floor(Math.random()*12))+1, l: m.messages[m.message].charAt(i)});
            }
        }
        
        let do_cycles = false;
        let message = ''; 
        
        for(let i = 0; i < m.fadeBuffer.length; i++){
            let fader = m.fadeBuffer[i];
            if(fader.c > 0){
            do_cycles = true;
            fader.c--;
            message += m.codeletters.charAt(Math.floor(Math.random()*m.codeletters.length));
            } else {
            message += fader.l;
            }
        }
        
        $(el).html(message);
        
        if(do_cycles === true){
            setTimeout(m.animateFadeBuffer, 50);
        } else {
            setTimeout(m.cycleText, 2000);
        }
        };
        
        m.cycleText = function(){
        m.message = m.message + 1;
        if(m.message >= m.messages.length){
            m.message = 0;
        }
        
        m.current_length = 0;
        m.fadeBuffer = false;
        $(el).html('');
        
        setTimeout(m.animateIn, 200);
        };
        
        m.init();
    }

    // const MessengerAbout = function(el){
    //     'use strict';
    //     let m = this;
        
    //     m.init = function(){
    //     m.codeletters = "&#*+%?£@§$";
    //     m.message = 0;
    //     m.current_length = 0;
    //     m.fadeBuffer = false;
    //     m.messages = [
    //         'About Me'
    //     ];
        
    //     setTimeout(m.animateIn, 100);
    //     };
        
    //     m.generateRandomString = function(length){
    //     let random_text = '';
    //     while(random_text.length < length){
    //         random_text += m.codeletters.charAt(Math.floor(Math.random()*m.codeletters.length));
    //     } 
        
    //     return random_text;
    //     };
        
    //     m.animateIn = function(){
    //     if(m.current_length < m.messages[m.message].length){
    //         m.current_length = m.current_length + 2;
    //         if(m.current_length > m.messages[m.message].length) {
    //         m.current_length = m.messages[m.message].length;
    //         }
            
    //         let message = m.generateRandomString(m.current_length);
    //         $(el).html(message);
            
    //         setTimeout(m.animateIn, 20);
    //     } else { 
    //         setTimeout(m.animateFadeBuffer, 20);
    //     }
    //     };
        
    //     m.animateFadeBuffer = function(){
    //     if(m.fadeBuffer === false){
    //         m.fadeBuffer = [];
    //         for(let i = 0; i < m.messages[m.message].length; i++){
    //         m.fadeBuffer.push({c: (Math.floor(Math.random()*12))+1, l: m.messages[m.message].charAt(i)});
    //         }
    //     }
        
    //     let do_cycles = false;
    //     let message = ''; 
        
    //     for(let i = 0; i < m.fadeBuffer.length; i++){
    //         let fader = m.fadeBuffer[i];
    //         if(fader.c > 0){
    //         do_cycles = true;
    //         fader.c--;
    //         message += m.codeletters.charAt(Math.floor(Math.random()*m.codeletters.length));
    //         } else {
    //         message += fader.l;
    //         }
    //     }
        
    //     $(el).html(message);
        
    //     if(do_cycles === true){
    //         setTimeout(m.animateFadeBuffer, 50);
    //     } else {
    //         setTimeout(m.cycleText, 2000);
    //     }
    //     };
        
    //     m.cycleText = function(){
    //     m.message = m.message + 1;
    //     if(m.message >= m.messages.length){
    //         m.message = 0;
    //     }
        
    //     m.current_length = 0;
    //     m.fadeBuffer = false;
    //     $(el).html('Who Is She?');
        
    //     setTimeout(m.animateIn, 500);
    //     };
        
    //     m.init();
    // }

    // const MessengerSkills = function(el){
    //     'use strict';
    //     let m = this;
        
    //     m.init = function(){
    //     m.codeletters = "&#*+%?£@§$";
    //     m.message = 0;
    //     m.current_length = 0;
    //     m.fadeBuffer = false;
    //     m.messages = [
    //         'Relevant Skills'
    //     ];
        
    //     setTimeout(m.animateIn, 100);
    //     };
        
    //     m.generateRandomString = function(length){
    //     let random_text = '';
    //     while(random_text.length < length){
    //         random_text += m.codeletters.charAt(Math.floor(Math.random()*m.codeletters.length));
    //     } 
        
    //     return random_text;
    //     };
        
    //     m.animateIn = function(){
    //     if(m.current_length < m.messages[m.message].length){
    //         m.current_length = m.current_length + 2;
    //         if(m.current_length > m.messages[m.message].length) {
    //         m.current_length = m.messages[m.message].length;
    //         }
            
    //         let message = m.generateRandomString(m.current_length);
    //         $(el).html(message);
            
    //         setTimeout(m.animateIn, 20);
    //     } else { 
    //         setTimeout(m.animateFadeBuffer, 20);
    //     }
    //     };
        
    //     m.animateFadeBuffer = function(){
    //     if(m.fadeBuffer === false){
    //         m.fadeBuffer = [];
    //         for(let i = 0; i < m.messages[m.message].length; i++){
    //         m.fadeBuffer.push({c: (Math.floor(Math.random()*12))+1, l: m.messages[m.message].charAt(i)});
    //         }
    //     }
        
    //     let do_cycles = false;
    //     let message = ''; 
        
    //     for(let i = 0; i < m.fadeBuffer.length; i++){
    //         let fader = m.fadeBuffer[i];
    //         if(fader.c > 0){
    //         do_cycles = true;
    //         fader.c--;
    //         message += m.codeletters.charAt(Math.floor(Math.random()*m.codeletters.length));
    //         } else {
    //         message += fader.l;
    //         }
    //     }
        
    //     $(el).html(message);
        
    //     if(do_cycles === true){
    //         setTimeout(m.animateFadeBuffer, 50);
    //     } else {
    //         setTimeout(m.cycleText, 2000);
    //     }
    //     };
        
    //     m.cycleText = function(){
    //     m.message = m.message + 1;
    //     if(m.message >= m.messages.length){
    //         m.message = 0;
    //     }
        
    //     m.current_length = 0;
    //     m.fadeBuffer = false;
    //     $(el).html('Show n Tell');
        
    //     setTimeout(m.animateIn, 500);
    //     };
        
    //     m.init();
    // }

    // const MessengerProjects = function(el){
    //     'use strict';
    //     let m = this;
        
    //     m.init = function(){
    //     m.codeletters = "&#*+%?£@§$";
    //     m.message = 0;
    //     m.current_length = 0;
    //     m.fadeBuffer = false;
    //     m.messages = [
    //         'Projects'
    //     ];
        
    //     setTimeout(m.animateIn, 100);
    //     };
        
    //     m.generateRandomString = function(length){
    //     let random_text = '';
    //     while(random_text.length < length){
    //         random_text += m.codeletters.charAt(Math.floor(Math.random()*m.codeletters.length));
    //     } 
        
    //     return random_text;
    //     };
        
    //     m.animateIn = function(){
    //     if(m.current_length < m.messages[m.message].length){
    //         m.current_length = m.current_length + 2;
    //         if(m.current_length > m.messages[m.message].length) {
    //         m.current_length = m.messages[m.message].length;
    //         }
            
    //         let message = m.generateRandomString(m.current_length);
    //         $(el).html(message);
            
    //         setTimeout(m.animateIn, 20);
    //     } else { 
    //         setTimeout(m.animateFadeBuffer, 20);
    //     }
    //     };
        
    //     m.animateFadeBuffer = function(){
    //     if(m.fadeBuffer === false){
    //         m.fadeBuffer = [];
    //         for(let i = 0; i < m.messages[m.message].length; i++){
    //         m.fadeBuffer.push({c: (Math.floor(Math.random()*12))+1, l: m.messages[m.message].charAt(i)});
    //         }
    //     }
        
    //     let do_cycles = false;
    //     let message = ''; 
        
    //     for(let i = 0; i < m.fadeBuffer.length; i++){
    //         let fader = m.fadeBuffer[i];
    //         if(fader.c > 0){
    //         do_cycles = true;
    //         fader.c--;
    //         message += m.codeletters.charAt(Math.floor(Math.random()*m.codeletters.length));
    //         } else {
    //         message += fader.l;
    //         }
    //     }
        
    //     $(el).html(message);
        
    //     if(do_cycles === true){
    //         setTimeout(m.animateFadeBuffer, 50);
    //     } else {
    //         setTimeout(m.cycleText, 2000);
    //     }
    //     };
        
    //     m.cycleText = function(){
    //     m.message = m.message + 1;
    //     if(m.message >= m.messages.length){
    //         m.message = 0;
    //     }
        
    //     m.current_length = 0;
    //     m.fadeBuffer = false;
    //     $(el).html('Her Work');
        
    //     setTimeout(m.animateIn, 500);
    //     };
        
    //     m.init();
    // }
  
    console.clear();
    let messenger = new Messenger($('#messenger'));

    // let messengerAbout = new MessengerAbout($('#scramble-name'));

    // let messengerSkills = new MessengerSkills($('#scramble-skill'));

    // let messengerProjects = new MessengerProjects($('#scramble-project'));



}

// Doc Ready
$(function(){
    app.init();
    AOS.init();
});