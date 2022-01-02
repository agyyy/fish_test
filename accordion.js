(()=>{
    class Accordion {
        constructor(obj){

        const $elm = document.getElementById(obj.hookName);
    
        const $trigger = $elm.getElementsByClassName('accordion-trigger');
        //getElementsByClassNameはそのクラス名の配列風オブジェクトを返す。
        //getElementsByTagNameはHTMLコレクションを返す。
        console.log($trigger);
        let index = 0;
        while(index<$trigger.length){
            $trigger[index].addEventListener('click',(e)=>this.clickHandler(e));
            index++;
            }
        }
        clickHandler = (e) => {
            e.preventDefault();
            console.log(e);
    
            const target = e.currentTarget;
            console.log(target);
    
            // const $content = $elm.getElementsByClassName('accordion-contents');
            // console.log($content[0]);
            // if($content[0].style.display === 'block'){
            //     $content[0].style.display = 'none';
            // }else{
            //     $content[0].style.display = 'block';
            // };
            
            const $content = target.nextElementSibling;
            if($content.style.display === 'block'){
                $content.style.display = 'none';
            }else{
                $content.style.display = 'block';
            }
    
    

        };
    }
    const  ssAccodion = new Accordion({
        hookName:'js-faq',
    });
    const bbAccordion = new Accordion({
        hookName:'js-bbb'
    });
    const ggAccordion = new Accordion({
        hookName:'js-ggg'
    })
})();
    
    // $trigger[index].addEventListener('click',(e)=> click(e));
    //     const click = (e) => {
    //         e.preventDefault(e);
    //             const $content = $trigger[index].nextElementSibling;
    //             if($content.style.display === 'block'){
    //                 $content.style.display = 'none';
    //             }else{
    //                 $content.style.display = 'block';
      

   

    // $trigger[0].addEventListener('click', (e)=>{
    //     e.preventDefault(e);
    //     const $content = $trigger[0].nextElementSibling;
    //     if($content.style.display === 'block'){
    //         $content.style.display = 'none';
    //     }else{
    //         $content.style.display = 'block';
    //     };
    // });
    // $trigger[1].addEventListener('click', (e)=>{
    //     e.preventDefault(e);
    //     const $content = $trigger[1].nextElementSibling;
    //     if($content.style.display === 'block'){
    //         $content.style.display = 'none';
    //     }else{
    //         $content.style.display = 'block';
    //     };
    // });
