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
</template>


<script>
export default {
  name: "AICarousel",
  data() {
    return {
      SWrapper: null || document.getElementsByClassName("Slider_Wrapper"),
      intervalTime: 3000,
      cw: [],
    };
  },
  mounted(){
    // THIS FUNCTION TRANSITION THOSE CARDS
    const trasitionFunction =()=>{
        if (this.SWrapper.length != 0){
          this.SWrapper.forEach(SlWrapper => {
            let CWHolder = SlWrapper.firstElementChild; 
            // CONTENT WRAPPER (CW)
            let CW = CWHolder.firstElementChild;

            CW.addEventListener('transitionend', () => {
                CW.appendChild(CW.firstElementChild);
                CW.style.transition = 'none';
                CW.style.transform = `translatex(${0}px)`;
                setTimeout(()=>{
                    CW.style.transition = 'all 0.5s ease-in-out 0.5s';
                })
            })

          })
        }
    }
    trasitionFunction();

    let timeoutId = "";
    // This Function Ditect Width of Carousel
    const WidthDetector = ()=>{
        if (this.SWrapper.length != 0){
          this.SWrapper.forEach(SlWrapper => {
                let intervalId = "";
                // let transitionTimeoutId = "";

                let CWHolder = SlWrapper.firstElementChild; 
                let screenWidth = SlWrapper.clientWidth;

                // CONTENT WRAPPER (CW)
                let CW = CWHolder.firstElementChild;
                let CWwidth = CW.clientWidth;
                this.cw.push(CW)

                // CONTENT (CNT)
                let CNT = CW.firstElementChild;
                let CNTWidth = CNT.clientWidth;
                let totalCNT = CW.children.length;

                // GAP BETWEEN TWO CARDS
                let gap_between_CNT = (CWwidth-(CNTWidth*totalCNT))/(totalCNT-1)

                
                // NUMBER OF CARDS DISPLAY ON THE SCREEN
                let CNTdisplaing = Math.ceil(screenWidth/(CNTWidth+(gap_between_CNT/2)))
                let xMove = (((CNTdisplaing * CNTWidth) + gap_between_CNT*(CNTdisplaing-1)) -screenWidth)/2;

                const movementInterval =()=>{
                  let move = CNTWidth + gap_between_CNT
                  CW.style.transform = `translatex(${-move}px)`;
                }

                window.addEventListener('resize', ()=>{
                  clearTimeout(timeoutId);
                  timeoutId = ""
                  clearInterval(intervalId)
                  intervalId = ""
                  timeoutId = setTimeout(WidthDetector, 1000)
                })
                                
                if((CWwidth < screenWidth)){
                    CWHolder.style.transform = `none`;
                    CW.style.transform = `none`;
                }
                if((CWwidth > screenWidth)){
                    CWHolder.style.transform = `translatex(${-xMove}px)`;
                    clearInterval(intervalId)
                    intervalId = ""
                    if(!intervalId) intervalId = setInterval(movementInterval, 3000);
                }
                if((CNTdisplaing==2) & (totalCNT>=2)){
                    let move = (CNTWidth-((screenWidth-CNTWidth)/2))+gap_between_CNT
                    CWHolder.style.transform = `translatex(${-move}px)`;
                }
                if((CNTdisplaing<=2) & (totalCNT<2)){
                    CWHolder.style.transform = `translatex(${0}px)`;
                    CW.style.width = `${CNTWidth}px`;
                }
          })
        }
    }
    WidthDetector();

    // const startInterVal = ()=>{

    // }

  }


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