<template>
<!-- SLIDER HOLDER -->
    <div class="iP3kL1jB2xC1eH5oU3eD9bZ1h ATAOTASHolder">
<!-- SLIDER WRAPPER -->
        <div v-bind:id="Property.ID" 
        class="hH6bF5bC7dM2dF4iB1eJ1eD4k">
<!-- CONTENT WRAPPER HOLDER -->
            <div class="vR2lC1dN2bD1xN1vB3rD1hF1d">
<!-- CONTENT WRAPPER -->
                <div class="lC3oC2kE3bD2fB1jC2qB4eF1v">
                    <slot>
<!-- 
    [ WHEN YOU TRY TO USE AI-CAROUSEL, USE BELOW CODE IN YOUR TEMPLATE SECTION ]

    <NewAIcarousel Selector="NAME-WHAT-YOU-WANT [BUT EACH NAME ARE DIFFERENTS]">
        <div v-for="data in Datas" v-bind:key="data.id" class="ANYTHING">{{data}}</div>
    </NewAIcarousel> 

    [ OR ]

    <NewAIcarousel Selector="NAME-WHAT-YOU-WANT [BUT EACH NAME ARE DIFFERENTS]">
        <div class="ANYTHING">1</div>
        <div class="ANYTHING">2</div>
        <div class="ANYTHING">3</div>
        .....
    </NewAIcarousel> 
-->
                    </slot>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'AIcarousel',
    data() {
        return {
            intervalTime: this.Property.Dlay || 5000,
            Total_CNT: null,
            screenWidth: null,
            CSL_Moving: "Moving",
            NaveBtnStyle: "PeVNCommon commonStyle",
            CounterPosition: "countPos countDefaultpos",
            CounterStyle: "CounterBtnCommon Slider_Button",
            Slider_Button_Active: "Slider_Button_Active",

        };
    },
    props:{
        /* FIRST CHECK IS THERE ANY CAROUSEL PRESENT OR NOT */
        Property: Object,
    },
    mounted() {
        /* ~~~~:~~~[ SELECT WRAPPER ELEMENT ]~~~~:~~~ */
        let SWrapper = document.getElementById(this.Property.ID);
        let CWHolder = SWrapper.firstElementChild;
        let ContentWrapper = CWHolder.firstElementChild;
        this.Total_CNT = ContentWrapper.childElementCount;
        this.screenWidth = SWrapper.clientWidth;
        /* GET PARENT-ELEMENT */
        let ParentElm = SWrapper.parentElement;
        let sectionIndex = 2; // ESSENTIAL FOR TOGGLER BUTTONS
        let InterValId = "";
        let CMD = -1;

        // ADDING STYLE PROPERY
        if (this.Property.NavBtn){
            this.NaveBtnStyle = `${this.Property.NavBtn} commonStyle`;
        }
        if (this.Property.CountPos){
            this.CounterPosition = `countPos ${this.Property.CountPos}`;
        }
        if (this.Property.CounterStyle){
            this.CounterStyle = `CounterBtnCommon ${this.Property.CounterStyle}`;
        }
        if (this.Property.CounterActiveStyle){
            this.Slider_Button_Active = `${this.Property.CounterActiveStyle}`;
        }


        /* ~~~~:~~~[ ACTION ACCORDING TO MOUSE POSTION ]~~~~:~~~ */
        SWrapper.addEventListener("mouseenter", () => {
            this.CSL_Moving = "";
        });
        SWrapper.addEventListener("mouseleave", () => {
            this.CSL_Moving = "Moving";
        });


        /* ~~~~:~~~[ HANDLE MOVEMENT OF CAROUSEL ]~~~~:~~~
        TRANSITION AND TRANSLETE CAROUSEL */
        ContentWrapper.addEventListener("transitionend", () => {
            if (CMD == -1) {
                ContentWrapper.appendChild(ContentWrapper.firstElementChild);
            } 
            else if (CMD == 1) {
                ContentWrapper.prepend(ContentWrapper.lastElementChild);
            }
            ContentWrapper.style.transition = "none";
            ContentWrapper.style.transform = `translatex(${0}px)`;
            setTimeout(() => {
                ContentWrapper.style.transition = "all 0.5s ease-in-out 0.5s";

                /* ECH AND EVERY CARDS TRANSITION WE UPDATE SECTION INDEX */
                sectionIndex = Number(ContentWrapper.children[1].classList[0]);
            });

        /* TOGGLER BUTTON STYLE CHANGE */
            let counterParentElm = ParentElm.children[1];
            if (counterParentElm != undefined) {
                let counterNext;
                let counterPrevious;
                if (CMD == -1) {
                let el = ContentWrapper.children[0].classList[0];
                counterNext = counterParentElm.children[el];
                counterPrevious = counterParentElm.children[el - 1];
                }
                if (CMD == 1) {
                let el = ContentWrapper.children[1].classList[0];
                counterNext = counterParentElm.children[el - 1];
                counterPrevious = counterParentElm.children[el];
                }
                if (counterNext != undefined) {
                    counterNext.classList.add(this.Slider_Button_Active);
                }
                if (counterPrevious != undefined) {
                    counterPrevious.classList.remove(this.Slider_Button_Active);
                }

                if ((counterNext == undefined) & (CMD == -1)) {
                    counterParentElm.lastElementChild.classList.remove(
                        this.Slider_Button_Active
                    );
                    counterParentElm.firstElementChild.classList.add(
                        this.Slider_Button_Active
                    );
                }
                if ((counterPrevious == undefined) & (CMD == 1)) {
                    counterParentElm.lastElementChild.classList.add(
                        this.Slider_Button_Active
                    );
                    counterParentElm.firstElementChild.classList.remove(
                        this.Slider_Button_Active
                    );
                }
            }
        });


        /* 
        ~~~~:~~~[ ADJUSTING CONTENT CENTER, ACCORDING 
        TO NUMBER OF CONTENT AND SCREEN WIDTH ]~~~~:~~~
        */
        const adjustCSL = () =>{
            let screenWidth = this.screenWidth;
            let CWwidth = CWHolder.clientWidth;
            let CNTWidth = ContentWrapper.firstElementChild.clientWidth;
            let totalCNT = this.Total_CNT;
            let IsTuchDown = false;
            let startX;

            
        /* ~~~~:~~~[ GAP BETWEEN ANY TWO CARDS ]~~~~:~~~ */
            let gap_between_CNT = (CWwidth - CNTWidth * totalCNT) / (totalCNT - 1);

        /* ~~~~:~~~[ TOTAL NUMBER/NUMBERS OF CARD/CARDS DISPLAY ON THE SCREEN ]~~~~:~~~ */
            let CNTdisplaing = Math.ceil(
                screenWidth / (CNTWidth + gap_between_CNT / 2)
            );
            let xMove =((CNTdisplaing * CNTWidth + gap_between_CNT * (CNTdisplaing - 1) - screenWidth) / 2);
            let move = CNTWidth + gap_between_CNT;

        /* ~~~~:~~~[ FIRST TIME MOVE CAROUSEL ]~~~~:~~~ */ 
            const moveCSLfirst = () => {
                move = CNTWidth + gap_between_CNT
                if (this.CSL_Moving == "Moving") {
                    ContentWrapper.style.transform = `translatex(${-move}px)`;
                    CMD = -1
                }
            };
            const callMoveCSLfirst = () =>{
                clearInterval(InterValId);
                InterValId = "";
                if (!InterValId){
                    InterValId = setInterval(moveCSLfirst, this.intervalTime);
                    addNevigationButton();
                }
            };


        /* 
        ~~~~:~~~[ CREATING LEFT & RIGHT MOVEMENT BUTTON ]~~~~:~~~
        [ WHEN CLICK RIGHT SIDE BUTTON CONTENT START MOVING LEFT DIRECTION ]
        [ WHEN CLICK LEFT SIDE BUTTON CONTENT START MOVING DIRECTION ]
        */ 
            const addNevigationButton = () => {
                let NevigationButton = document.createElement("div");
                NevigationButton.className = "NavigationButtons";

            /* LEFT NAVIGATION BUTTON */ 
                let NVbtnPrevious = document.createElement("div");
                NVbtnPrevious.className = `Previous ${this.NaveBtnStyle}`;
                NVbtnPrevious.innerHTML = "&lsaquo;";

                NevigationButton.prepend(NVbtnPrevious);
                SWrapper.appendChild(NVbtnPrevious);

                NVbtnPrevious.addEventListener("click", () => {
                    this.CSL_Moving = "";
                    if (CMD == -1) {
                        CMD = 1;
                    }
                    CWHolder.style.justifyContent = "flex-start";
                    ContentWrapper.style.transform = `translatex(${move}px)`;
                });

            /* RIGHT NAVIGATION BUTTON */
                let NVbtnNext = document.createElement("div");
                NVbtnNext.className = `Next ${this.NaveBtnStyle}`;
                NVbtnNext.innerHTML = "&rsaquo;";

                NevigationButton.appendChild(NVbtnNext);
                SWrapper.appendChild(NVbtnNext);

                NVbtnNext.addEventListener("click", () => {
                    CMD = -1;
                    CWHolder.style.justifyContent = "flex-end";
                    ContentWrapper.style.transform = `translatex(${-move}px)`;
                });

            };
        
        /* 
        ~~~~:~~~[ CREATING MULTY TOGGLE BUTTON ]~~~~:~~~
        [ CREATE MULTIPLE TOGGLER BUTTON
         ACCORDING TO THE NUMBER OF CONTENT NUMBER]
        */
            const createMultiNavBtn = () => {
                let counter_click = document.createElement("div");
                counter_click.className = `${this.CounterPosition}`;

                if (ParentElm.children.length == 1) {
                    /* CREATING COUNTER CLICKABLE BUTTONS */
                    for (let i = 0; i < totalCNT; i++) {
                        let CarouselClass = ContentWrapper.children[i].classList[0];
                    if (isNaN(CarouselClass) == true) {
                        ContentWrapper.children[i].className = `${i + 1} ${CarouselClass}`;
                    }

                    let new_div = document.createElement("div");
                    new_div.innerText = i + 1;
                    new_div.className = `${this.CounterStyle}`;
                    counter_click.appendChild(new_div);

                    const TranslateCards = () => {
                        if (i + 1 - sectionIndex > 0) {
                            CMD = -1;
                            for (let Cno = 0; Cno < (i + 1 - sectionIndex); Cno++) {
                                ContentWrapper.appendChild(ContentWrapper.children[0]);
                            }
                            sectionIndex = i + 1;
                        }
                        if (i + 1 - sectionIndex < 0) {
                            CMD = 1;
                            for (let Cno = 0; Cno < (sectionIndex - (i + 1)); Cno++) {
                                ContentWrapper.prepend(ContentWrapper.children[totalCNT - 1]);
                            }
                            sectionIndex = i + 1;
                        }
                        if (i + 1 - sectionIndex == 0) {
                            return false;
                        }
                    };
                    /* WHEN CLICK NUMBER TOGGLER BUTTONS */
                    new_div.addEventListener("click", () => {
                        this.CSL_Moving = "";
                        counter_click.children[sectionIndex - 1].classList.remove(
                        this.Slider_Button_Active
                        );
                        new_div.classList.add(this.Slider_Button_Active);
                        TranslateCards();
                        setTimeout(() => {
                            this.CSL_Moving = "Moving";
                        }, 2*this.intervalTime);
                    });
                    }
                    if (totalCNT > 2) {
                        ParentElm.appendChild(counter_click);
                    }
                }
            };

        /* ~~~~:~~~[ ACTION ACCORDING TO SCREEN TOUCH ]~~~~:~~~ */
            /* WHEN TOUCH START */ 
            SWrapper.addEventListener("touchstart", (e) => {
                IsTuchDown = true;
                this.CSL_Moving = "";
                let touch = e.touches[0];
                startX = touch.pageX - SWrapper.offsetLeft;
            },{ passive: true });

            /* WHEN TOUCH MOVE */ 
            SWrapper.addEventListener("touchmove", (e) => {
                this.CSL_Moving = "";
                if (!IsTuchDown) return;

                let touch = e.touches[0];
                const x = touch.pageX - SWrapper.offsetLeft;
                const slidMove = x - startX;

                if (CWwidth > screenWidth) {
                    if (slidMove < - (CNTWidth/2)) {
                        CWHolder.style.justifyContent = "flex-start";
                        ContentWrapper.style.transform = `translatex(${-move}px)`;
                        CMD = -1;
                    }
                    if (slidMove > (CNTWidth/2)) {
                        CWHolder.style.justifyContent = "flex-end";
                        ContentWrapper.style.transform = `translatex(${move}px)`;
                        CMD = 1;
                    }
                }

            },{ passive: true });
            
            /* WHEN TOUCH END */ 
            SWrapper.addEventListener("touchend",() => {
                    IsTuchDown = false;
                    this.CSL_Moving = "Moving";
                },
                { passive: true }
            )


        /* ~~~~:~~~[ POSTIONING CAROUSEL ]~~~~:~~~ */

            /* WHEN SCREEN WIDTH IS LESSTHAN CONTENT WIDTH 
            CALL FIRST TIME CAROUSEL MOVEMENT FUNCTION*/
            if (CWwidth > screenWidth){
                CWHolder.style.transform = `translatex(${-xMove}px)`;
                callMoveCSLfirst();
                createMultiNavBtn();
            }
            /* WHEN SCREEN WIDTH GRATERTHAN CONTENT WIDTH REMOVE INTERVAL 
            & CENTER ALL CONTENT */
            if (CWwidth <= screenWidth){
                /* REMOVE LEFT & RIGHT NEVIGATION BUTTON */
                if (SWrapper.children.length > 1) {
                    SWrapper.removeChild(SWrapper.children[1]);
                    SWrapper.removeChild(SWrapper.children[1]);
                }
                /* REMOVE TOGGLER NAVIGATION BUTTONS */ 
                if ((totalCNT > 2) & (ParentElm.children[1] != undefined)) {
                    ParentElm.removeChild(ParentElm.children[1]);
                }
                clearInterval(InterValId);
                CWHolder.style.transform = `none`;
                ContentWrapper.style.transform = `none`;
                CWHolder.style.justifyContent = "center";
            }
            /* CONTENT NUMBER GRATERTHAN '2' THEN WE CALL THS FUNCTION */
            if ((CNTdisplaing == 2) & (totalCNT >= 2) & (screenWidth<= 2*CNTWidth)){
                move = (CNTWidth-((screenWidth-CNTWidth)/2))+gap_between_CNT
                CWHolder.style.transform = `translatex(${-move}px)`;
                callMoveCSLfirst();
            }
        };
        /* 
        IF CONTENT NUMBER NOT ZERO THEN WE CALL CAROUSEL POSTION ADJUST FUNCTION 
        */
        if(this.Total_CNT != 0){
            adjustCSL();
        }

        /* ~~~~:~~~[ AFTER 200ms CHAKE CONTENT SITUATION ]~~~~:~~~ */
        const contentOBSERVER = ()=>{
            let New_Total_CNT = ContentWrapper.childElementCount
        /* CHECK CONTENT UPDATE OR IS THERE ANY NEW CONTENT ADDED */
            if(this.Total_CNT != New_Total_CNT){
                this.Total_CNT = New_Total_CNT
                if(this.Total_CNT != 0){
                    adjustCSL();
                }
            }
        /* CHECK CHECK SCREEN WITH CHANGE OR NOT */
            let New_screenWidth = SWrapper.clientWidth;
            if (this.screenWidth != New_screenWidth){
                this.screenWidth = New_screenWidth
                if(this.Total_CNT != 0){
                    adjustCSL();
                }
            }
        /* REMOVE LEFT & RIGHT NEVIGATION BUTTON FOR SMALL SCREEN */
            if (this.screenWidth<=420) {
                if (SWrapper.children.length > 1) {
                    SWrapper.removeChild(SWrapper.children[1]);
                    SWrapper.removeChild(SWrapper.children[1]);
                }
            }
            window.requestAnimationFrame(contentOBSERVER);
        }
        window.requestAnimationFrame(contentOBSERVER);

    },
}
</script>

<style>
/* SLIDER HOLDER */
.iP3kL1jB2xC1eH5oU3eD9bZ1h{
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
}
/* SLIDER WRAPPER 
[IT WRAP THE CONTENT ACCORDING TO REQUIREMENT ]*/
.hH6bF5bC7dM2dF4iB1eJ1eD4k{
    height: auto;
    width: 100%;
    display: grid;
    grid-template-columns: auto;
    overflow: hidden;
    position: relative;
    cursor: pointer;
}

/* CONTENT WRAPPER HOLDER */
.vR2lC1dN2bD1xN1vB3rD1hF1d{
    width: auto;
    height: auto;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: transparent;
}
/* CONTENT WRAPPER */
.lC3oC2kE3bD2fB1jC2qB4eF1v{
    width: auto;
    min-height: 1.5rem;
    display: flex;
    overflow: hidden;
    padding: 0;
    background-color: transparent;
    transition: all 0.5s ease-in-out 0.5s;
}
/* BSIC STYLING OF CONTENT WE CAN OVERRIGHT IT */
.lC3oC2kE3bD2fB1jC2qB4eF1v div{
    width: 15rem;
    height: 10rem;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 40px;
    font-weight: bold;
    color: #009b5a;
    background-color: #d3faff;
    margin: 0 5px;
    position: relative;
    z-index: 1;
    border-radius: 5%;
    margin: 5px;
}
/* FIRST CONTENT  */
.lC3oC2kE3bD2fB1jC2qB4eF1v div:first-child{
    margin-left: 0;
}
/* LAST CONTENT */
.lC3oC2kE3bD2fB1jC2qB4eF1v div:last-child{
    margin-right: 0;
}

/* LEFT RIGHT NEVIGATION BUTTONS */
.commonStyle{
    position: absolute;
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
}
.PeVNCommon{
    top: 45%;
    font-size: 2.5rem;
    font-weight: bolder;
    color: #302f2fe8;
    height: 2rem;
    width: 2rem;
    background-color: #ffffff8a;
    border-radius: 50%;
    text-shadow: 0 0 3px #fff, 0 0 5px #fff;
}
.hH6bF5bC7dM2dF4iB1eJ1eD4k .Previous{
    left: 0;
}
.hH6bF5bC7dM2dF4iB1eJ1eD4k .Next{
    right: 0;
}
/* CIRCULAR NAVIGATION BUTTONS  */
.countPos{
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: transparent;
    cursor: pointer;
}
.countDefaultpos{
    height: 1.25rem;
    margin-top: -1.7rem;
    padding-bottom: 0.5rem;
}
.CounterBtnCommon{
    display: flex;
    text-align: center;
    align-items: center;
    justify-content: center;
    margin: 2px;
    box-sizing: border-box;
    margin-top: 2.5px;
    margin-bottom: 5px;
    position: relative;
}
.Slider_Button{
    height: 1rem;
    width: 1rem;
    background: #a5a5a5;
    border-radius: 50%;
    font-size: 0.6rem;
    font-weight: bolder;
    color: #ffffff;
    transition: 1s;
}

.Slider_Button_Active{
    background: #16011f;
    border: 0.1rem solid #000000;
    color: #ffffff;
}
</style>
