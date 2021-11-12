this.SWrapper.forEach((SlWrapper) => {
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
  let gap_between_CNT = (CWwidth - CNTWidth * totalCNT) / (totalCNT - 1);

  // NUMBER OF CARDS DISPLAY ON THE SCREEN
  let CNTdisplaing = Math.ceil(screenWidth / (CNTWidth + gap_between_CNT / 2));

  /*
                LOGIC: [ HOWMUCH CONTENT-HOLDER MOVEMENT REQUIRE TO DISPLAY ALL CARDS CENTER ACCORDING TO SCREEN WIDTH CHANGE BY MOVING FIRST CARD ONLY ] =>
                A = SCREEN WIDTH, B = CARD WIDTH, C = GAP BETWEEN TWO CARDS, D = HOW MANY CARDS DISPLAYING
                move = ((D x B) + (C x (D - 1))-A)/2
                */

  let xMove =
    (CNTdisplaing * CNTWidth +
      gap_between_CNT * (CNTdisplaing - 1) -
      screenWidth) /
    2;

  if (CWwidth < screenWidth) {
    CWHolder.style.transform = `none`;
  }
  if (CWwidth > screenWidth) {
    CWHolder.style.transform = `translatex(${-xMove}px)`;
  }
  if ((CNTdisplaing == 2) & (totalCNT >= 2)) {
    let move = CNTWidth - (screenWidth - CNTWidth) / 2 + gap_between_CNT;
    CWHolder.style.transform = `translatex(${-move}px)`;
  }
  if ((CNTdisplaing <= 2) & (totalCNT < 2)) {
    CWHolder.style.transform = `translatex(${0}px)`;
    CW.style.width = `${CNTWidth}px`;
  }
});
