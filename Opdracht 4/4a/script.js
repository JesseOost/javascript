let n1 = 0, n2= 1, nextTerm;

for(let i = 1; i <= 20; i++){

    const para = document.createElement("p");
    const node = document.createTextNode(n1);

    para.appendChild(node);
    document.getElementById("container").appendChild(para);

    nextTerm = n1 + n2;
    n1 = n2;
    n2 = nextTerm;
}