aryex = []
nameary = []
function btn(e) {
    if (aryex.length < 11 ) {
        vb = e.target.value;
        bid = e.target.id;
        li = document.createElement("li")
        li.innerText = vb + " ";
        li.classList.add("liradio")
        btnEle = document.createElement("button")
        btnEle.innerText = "Delete";
        btnEle.setAttribute("data-btnid", bid)
        btnEle.classList.add("material-symbols-outlined")
        // console.log(bid)
        btnEle.onclick = del;
        ol.appendChild(li)
        li.appendChild(btnEle)
        aryex.push(bid)
        document.getElementById(e.target.id).disabled = true;
    }
    else {
        alert("You choose only 11 players")
    }
}
function del() {
    this.parentElement.remove();
    delid = this.getAttribute('data-btnid')
    document.getElementById(delid).disabled = false;
    indx = aryex.indexOf(delid);
    aryex.splice(indx, 1)
    // console.log(aryex) 
}
function save() {
    get = + savebtn.getAttribute("data-step")
    if(aryex.length < 11){
        alert("Please Select atlest 11 players")
        return false
    }
    if (get == 1) {
        one.style = "animation: item 2s ; background-color: rgb(5, 250, 17)"
        line1.style = "border-color:rgb(47, 245, 57);"
        document.getElementById("savebtn").innerText = "Choose Captain";
        // alert("Please Select Your Captain")
        // alert("this is one")
        cls = document.getElementsByClassName("material-symbols-outlined")
        for (var i = 0; i < cls.length; i++) {
            cls[i].style.display = 'none';
        }
        rdo = document.getElementsByClassName("liradio")

        for (var z = 0; z < rdo.length; z++) {
            rbt = document.createElement("input");
            rbt.setAttribute("type", "radio");
            rbt.setAttribute("name", "captian");
            rbt.setAttribute("id", "cptnrdo");
            rbt.value = aryex[z];
            rdo[z].appendChild(rbt);
        }
        cpt = document.createElement("h2")
        cpt.style = "box-shadow: 5px 6px 5px #0f0c0c;"
        cpt.innerText = "Captain : "
        capt.appendChild(cpt);
    }
    else if (get == 2) {
        document.getElementById("cptnrdo").disabled = true;
        two.style = "animation: item 2s alternate;background-color: rgb(5, 250, 17)"
        line2.style = "border-color:rgb(47, 245, 57);"
        document.getElementById("savebtn").innerText = "Choose Vice Captain";
        // alert("Please Select Vice Captain")
        ctxt = document.createElement("span")
        rdval = document.querySelector('input[name = captian]:checked').value;
        rdid = document.getElementById(rdval).innerText
        // console.log(rdid);
        ctxt.innerText = rdid
        cpt.appendChild(ctxt)

        cpt = document.createElement("h2")
        cpt.innerText = " Vice Captain : "
        cpt.style = "box-shadow: 5px 6px 5px #0f0c0c;"
        capt.appendChild(cpt);

    }
    else if (get == 3) {
        three.style = "animation: item 2s alternate;background-color: rgb(5, 250, 17)"
        line3.style = "border-color:rgb(47, 245, 57);"
        document.getElementById("savebtn").innerText = "Preview";
        // alert("this is Three")
        ctxt = document.createElement("span")
        rdval = document.querySelector('input[name = captian]:checked').value;
        rdidvc = document.getElementById(rdval).innerText
        ctxt.innerText = rdidvc
        cpt.appendChild(ctxt)
    }
    else if (get == 4) {
        // alert("Hello i am number 4")
        document.getElementById("bg-box").style = "display:inline-block";
        four.style= "animation: item 2s alternate;background-color: rgb(5, 250, 17)";
        document.getElementById("team-main-box").style = "display:none";
        document.getElementById("savebtn").style = "display:none";

        // ------------------ player insert
        for(bb of aryex){
            nm = document.getElementById(bb).innerText;
            // console.log(nm);
            if(nm != rdid && nm !== rdidvc){
            nameary.push(nm)
                // cname = nm;  
            }
        }
        plr1.innerText = nameary[0]
        plr2.innerText = nameary[1]
        plr3.innerText = nameary[2]
        plr4.innerText = nameary[3]
        plr5.innerText = rdidvc + "  - VC"
        plr6.innerText = rdid + "  - C" 
        plr7.innerText = nameary[4]
        plr8.innerText = nameary[5]
        plr9.innerText = nameary[6]
        plr10.innerText = nameary[7]
        plr11.innerText = nameary[8]
    

    }

    val2 = get + 1;
    savebtn.setAttribute("data-step", val2)
    }
