<template>
  <div class="Carousel_None"></div>
</template>

<script>
export default {
  name: "AICarousel",
  data() {
    return {
      SWrapper: null || document.getElementsByClassName("Slider_Wrapper"),
      intervalTime: 4000,
      cw: [],
    };
  },
  mounted() {
    // // FIRST CHECK IS THERE ANY CAROUSEL PRESENT OR NOT
    if (this.SWrapper.length != 0) {
      this.SWrapper.forEach((element) => {
        let ParentElm = element.parentElement;
        let CMD = -1;
        let InterValId = "";
        let timeOutFunctionId = "";
        let CSL_Moving = "Moving";
        let sectionIndex = 2;

        let CWHolder = element.firstElementChild;
        let CW = CWHolder.firstElementChild;
        let CNT = CW.firstElementChild;

        element.addEventListener("mouseenter", () => {
          CSL_Moving = "";
        });
        element.addEventListener("mouseleave", () => {
          CSL_Moving = "Moving";
        });

        CW.addEventListener("transitionend", () => {
          if (CMD == -1) {
            CW.appendChild(CW.firstElementChild);
          } else if (CMD == 1) {
            CW.prepend(CW.lastElementChild);
          }
          CW.style.transition = "none";
          CW.style.transform = `translatex(${0}px)`;
          setTimeout(() => {
            CW.style.transition = "all 0.5s ease-in-out 0.5s";
            sectionIndex = Number(CW.children[1].classList[0]);
          });

          let counterParentElm = ParentElm.children[1];
          if (counterParentElm != undefined) {
            let counterNext;
            let counterPrevious;
            if (CMD == -1) {
              let el = CW.children[0].classList[0];
              counterNext = counterParentElm.children[el];
              counterPrevious = counterParentElm.children[el - 1];
            }
            if (CMD == 1) {
              let el = CW.children[1].classList[0];
              counterNext = counterParentElm.children[el - 1];
              counterPrevious = counterParentElm.children[el];
            }
            if (counterNext != undefined) {
              counterNext.classList.add("Slider_Button_Active");
            }
            if (counterPrevious != undefined) {
              counterPrevious.classList.remove("Slider_Button_Active");
            }

            if ((counterNext == undefined) & (CMD == -1)) {
              counterParentElm.lastElementChild.classList.remove(
                "Slider_Button_Active"
              );
              counterParentElm.firstElementChild.classList.add(
                "Slider_Button_Active"
              );
            }
            if ((counterPrevious == undefined) & (CMD == 1)) {
              counterParentElm.lastElementChild.classList.add(
                "Slider_Button_Active"
              );
              counterParentElm.firstElementChild.classList.remove(
                "Slider_Button_Active"
              );
            }
          }
        });

        const adjustCSL = () => {
          let screenWidth = element.clientWidth;
          let CWwidth = CW.clientWidth;
          let CNTWidth = CNT.clientWidth;
          let totalCNT = CW.children.length;
          let IsTuchDown = false;
          let startX;

          // GAP BETWEEN TWO CARDS
          let gap_between_CNT =
            (CWwidth - CNTWidth * totalCNT) / (totalCNT - 1);

          // NUMBER OF CARDS DISPLAY ON THE SCREEN
          let CNTdisplaing = Math.ceil(
            screenWidth / (CNTWidth + gap_between_CNT / 2)
          );

          let xMove =
            (CNTdisplaing * CNTWidth +
              gap_between_CNT * (CNTdisplaing - 1) -
              screenWidth) /
            2;
          let move = CNTWidth + gap_between_CNT;

          // DETECTING TOUCH
          element.addEventListener(
            "touchstart",
            (e) => {
              IsTuchDown = true;
              CSL_Moving = "";
              let touch = e.touches[0];
              startX = touch.pageX - element.offsetLeft;
            },
            { passive: true }
          );

          element.addEventListener(
            "touchend",
            () => {
              IsTuchDown = false;
              CSL_Moving = "Moving";
            },
            { passive: true }
          );

          element.addEventListener(
            "touchmove",
            (e) => {
              CSL_Moving = "";
              if (!IsTuchDown) return;
              let touch = e.touches[0];
              const x = touch.pageX - element.offsetLeft;
              const slidMove = x - startX;
              if (CWwidth > screenWidth) {
                if (slidMove < 0) {
                  CWHolder.style.justifyContent = "flex-start";
                  CW.style.transform = `translatex(${-move}px)`;
                  CMD = -1;
                }
                if (slidMove > 0) {
                  CWHolder.style.justifyContent = "flex-end";
                  CW.style.transform = `translatex(${move}px)`;
                  CMD = 1;
                }
              }
              setTimeout(() => {
                CSL_Moving = "Moving";
              }, this.intervalTime);
            },
            { passive: true }
          );

          // First-time Move Carousel
          const moveCSLfirst = () => {
            move = CNTWidth + gap_between_CNT
            if ((CSL_Moving == "Moving") & (CMD == -1)) {
              CW.style.transform = `translatex(${-move}px)`;
            } else if ((CSL_Moving == "Moving") & (CMD == 1)) {
              CW.style.transform = `translatex(${move}px)`;
            }
          };

          // ADDING LEFT RIGHT NAVIGATION BUTTON
          const addNevigationButton = () => {
            let NevigationButton = document.createElement("div");
            NevigationButton.className = "NavigationButtons";

            let NVbtnPrevious = document.createElement("div");
            NVbtnPrevious.className = "Previous PeVNCommon";
            NVbtnPrevious.innerHTML = "&lsaquo;";

            let NVbtnNext = document.createElement("div");
            NVbtnNext.className = "Next PeVNCommon";
            NVbtnNext.innerHTML = "&rsaquo;";

            NevigationButton.prepend(NVbtnPrevious);
            NevigationButton.appendChild(NVbtnNext);
            element.appendChild(NVbtnPrevious);
            element.appendChild(NVbtnNext);

            NVbtnPrevious.addEventListener("click", () => {
              if (CMD == -1) {
                CMD = 1;
              }
              CWHolder.style.justifyContent = "flex-start";
              CW.style.transform = `translatex(${move}px)`;
            });
            NVbtnNext.addEventListener("click", () => {
              CMD = -1;
              CWHolder.style.justifyContent = "flex-end";
              CW.style.transform = `translatex(${-move}px)`;
            });
          };

          // ADDING TOGGLER NAVIGATION BUTTON
          const createMultiNavBtn = () => {
            let counter_click = document.createElement("div");
            counter_click.className = `counter_click`;
            if (ParentElm.children.length == 1) {
              for (let i = 0; i < totalCNT; i++) {
                let CarouselClass = CW.children[i].classList[0];
                if (isNaN(CarouselClass) == true) {
                  CW.children[i].className = `${i + 1} ${CarouselClass}`;
                }

                let new_div = document.createElement("div");
                new_div.innerText = i + 1;
                new_div.className = `Slider_Button`;
                counter_click.appendChild(new_div);

                const TranslateCards = () => {
                  if (i + 1 - sectionIndex > 0) {
                    CMD = -1;
                    for (let Cno = 0; Cno < i + 1 - sectionIndex; Cno++) {
                      CW.appendChild(CW.children[0]);
                    }
                    sectionIndex = i + 1;
                  }
                  if (i + 1 - sectionIndex < 0) {
                    CMD = 1;
                    for (let Cno = 0; Cno < sectionIndex - (i + 1); Cno++) {
                      CW.prepend(CW.children[totalCNT - 1]);
                    }
                    sectionIndex = i + 1;
                  }
                  if (i + 1 - sectionIndex == 0) {
                    return false;
                  }
                };

                new_div.addEventListener("click", () => {
                  CSL_Moving = "";
                  counter_click.children[sectionIndex - 1].classList.remove(
                    "Slider_Button_Active"
                  );
                  new_div.classList.add("Slider_Button_Active");
                  TranslateCards();
                  setTimeout(() => {
                    CSL_Moving = "Moving";
                  }, this.intervalTime);
                });
              }
              if (totalCNT > 2) {
                ParentElm.appendChild(counter_click);
              }
            }
          };

          // ON-RESIZE THE WINDOW RESIZE THOSE CONTENT
          window.addEventListener("resize", () => {
            clearTimeout(timeOutFunctionId);
            timeOutFunctionId = "";
            clearInterval(InterValId);
            InterValId = "";
            if ((CWwidth <= screenWidth) | (screenWidth<=480)) {
              if (element.children.length > 1) {
                element.removeChild(element.children[1]);
                element.removeChild(element.children[1]);
              }
            }
            timeOutFunctionId = setTimeout(adjustCSL, this.intervalTime);
          });

          // Positioning Carousel
          if (CWwidth <= screenWidth) {
            CWHolder.style.transform = `none`;
            CW.style.transform = `none`;
            CWHolder.style.justifyContent = "center";
            // REMOVE LEFT & RIGHT NEVIGATION BUTTON
            if (element.children.length > 1) {
              element.removeChild(element.children[1]);
              element.removeChild(element.children[1]);
            }
            // REMOVE TOGGLER NAVIGATION BUTTONS
            if ((totalCNT > 2) & (ParentElm.children[1] != undefined)) {
              ParentElm.removeChild(ParentElm.children[1]);
            }
          }
          if (CWwidth > screenWidth) {
            CWHolder.style.transform = `translatex(${-xMove}px)`;
            clearInterval(InterValId);
            InterValId = "";
            if (!InterValId)
              InterValId = setInterval(moveCSLfirst, this.intervalTime);
            addNevigationButton();
            createMultiNavBtn();
          }
          if (screenWidth<=480) {
            // REMOVE LEFT & RIGHT NEVIGATION BUTTON
            if (element.children.length > 1) {
              element.removeChild(element.children[1]);
              element.removeChild(element.children[1]);
            }
          }
          if ((CNTdisplaing == 2) & (totalCNT >= 2)) {
            move = (CNTWidth-((screenWidth-CNTWidth)/2))+gap_between_CNT
            CWHolder.style.transform = `translatex(${-move}px)`;
          }
        };
        adjustCSL();
      });
    }
  },
};
</script>

<style scoped>
@import "./Carousel.css";
.Carousel_None {
  height: 0;
  width: 0;
  display: none;
}
</style>
