<template>
    <div class="Carousel_None"></div>
    
        <!-- <div class="Slider_Holder">
            <div class="Slider_Wrapper">
                <div class="content_Wrapper_Holder">
                    <div class="Content_Wrapper">
                        <div class="cards">1</div>
                        <div class="cards">2</div>
                        <div class="cards">3</div>
                        <div class="cards">4</div>
                        <div class="cards">5</div>
                        <div class="cards">6</div>
                        <div class="cards">7</div>
                    </div>
                </div>
                
            </div>
        </div> -->
        {{CWwidth}}
</template>


<script>
export default {
  name: "AICarousel",
  data() {
    return {
      SWrapper: null || document.getElementsByClassName("Slider_Wrapper"),
      sliding_duration: 3000,
      CWwidth: '',
    };
  },
  methods: {
    widthDetector(){
        if (this.SWrapper.length != 0){
            this.SWrapper.forEach(SlWrapper => {
                let Carouse_Moving = false
                // let CMD = -1;
                // CONTENT WRAPPER HOLDER (CWHolder)
                let CWHolder = SlWrapper.firstElementChild; 
                let screenWidth = SlWrapper.clientWidth;

                // CONTENT WRAPPER (CW)
                let CW = CWHolder.firstElementChild;
                let CWwidth = CW.clientWidth;

                // CONTENT (CNT)
                let CNT = CW.firstElementChild;
                let CNTWidth = CNT.clientWidth;
                let totalCNT = CW.children.length;

                // GAP BETWEEN TWO CARDS
                let gap_between_CNT = (CWwidth-(CNTWidth*totalCNT))/(totalCNT-1)

                
                // NUMBER OF CARDS DISPLAY ON THE SCREEN
                let CNTdisplaing = Math.ceil(screenWidth/(CNTWidth+(gap_between_CNT/2)))
                let xMove = (((CNTdisplaing * CNTWidth) + gap_between_CNT*(CNTdisplaing-1)) -screenWidth)/2;

                // const ChangeWidth = () =>{
                //     this.CWwidth = CW.clientWidth;
                // }
                // let interValId;
                // window.onresize = () =>{
                //     clearTimeout(interValId)
                //     interValId = setTimeout(ChangeWidth, 500);
                // }

                // let TimerVariable;
                // console.warn(CWwidth)
                
                if((CWwidth < screenWidth)){
                    CWHolder.style.transform = `none`;
                    Carouse_Moving == false
                    this.newYourk(Carouse_Moving);
                }
                if((CWwidth > screenWidth)){
                    CWHolder.style.transform = `translatex(${-xMove}px)`;
                    Carouse_Moving == true
                    this.newYourk(Carouse_Moving);
                }
                if((CNTdisplaing==2) & (totalCNT>=2)){
                    let move = (CNTWidth-((screenWidth-CNTWidth)/2))+gap_between_CNT
                    CWHolder.style.transform = `translatex(${-move}px)`;
                }
                if((CNTdisplaing<=2) & (totalCNT<2)){
                    CWHolder.style.transform = `translatex(${0}px)`;
                    CW.style.width = `${CNTWidth}px`;
                }
                // if (Carouse_Moving==true){
                //     const Timer = ()=>{
                //         console.warn('hello')
                //     }
                //     const startTimer= ()=>{
                //         TimerVariable = setInterval(Timer, 3000);
                //         console.warn(TimerVariable)
                //     }
                //     startTimer();
                // }
                // // console.warn(Carouse_Moving)
                // if (Carouse_Moving==false){
                //     const stopTimer= ()=>{
                //         clearInterval(TimerVariable)
                //         console.warn(TimerVariable)
                //     }
                //     stopTimer();
                // }
            })
        }
    },
    newYourk(Carouse_Moving){
        console.warn(Carouse_Moving)
        if (Carouse_Moving == true){
            console.warn('new function')
        }
    }
    // carousel(){
    //     if (this.SWrapper.length != 0){
    //         this.SWrapper.forEach(SlWrapper => {

    //             console.warn(SlWrapper)
    //             window.onresize = () =>{
    //                 setTimeout(() => {
    //                     console.warn(this.IsMoving)
    //                 }, 3000);
    //             }
    //         //     // let Carouse_Moving = true
    //         //     let CMD = -1;
    //         //     // CONTENT WRAPPER HOLDER (CWHolder)
    //         //     let CWHolder = SlWrapper.firstElementChild; 
    //         //     // let screenWidth = SlWrapper.clientWidth;

    //         //     // CONTENT WRAPPER (CW)
    //         //     let CW = CWHolder.firstElementChild;
    //         //     // let CWwidth = CW.clientWidth;

    //         //     // CONTENT (CNT)
    //         //     // let CNT = CW.firstElementChild;
    //         //     // let CNTWidth = CNT.clientWidth;
    //         //     // let totalCNT = CW.children.length;

    //         //     // GAP BETWEEN TWO CARDS
    //         //     // let gap_between_CNT = (CWwidth-(CNTWidth*totalCNT))/(totalCNT-1)

                
    //         //     // NUMBER OF CARDS DISPLAY ON THE SCREEN
    //         //     // let CNTdisplaing = Math.ceil(screenWidth/(CNTWidth+(gap_between_CNT/2)))
    //         //     // let xMove = (((CNTdisplaing * CNTWidth) + gap_between_CNT*(CNTdisplaing-1)) -screenWidth)/2;
                

    //         //     CW.addEventListener('transitionend', () => {
    //         //         if (CMD == -1){
    //         //             CW.appendChild(CW.firstElementChild);
    //         //         }else if (CMD == 1){
    //         //             CW.prepend(CW.lastElementChild);
    //         //         }
    //         //         CW.style.transition = 'none';
    //         //         CW.style.transform = `translatex(${0}px)`;
    //         //         setTimeout(()=>{
    //         //             if (CW.clientWidth > SlWrapper.clientWidth){
    //         //                 CW.style.transition = 'all 0.5s ease-in-out 0.5s';
    //         //             }
    //         //         })
    //         //     })

    //         })
    //     }
        
    // }
  },
  mounted() {
    this.widthDetector();

    let interValId;
    window.onresize = () =>{
        clearTimeout(interValId)
        interValId = setTimeout(this.widthDetector, 500);
    }

  },
};
</script>

<style scoped>
@import "./Carousel.css";
.Carousel_None{
    height: 0;
    width: 0;
    display: none;
}
</style>