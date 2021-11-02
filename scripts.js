let cardList = document.getElementById("parent").children;

function getOrder(array = [])
{   

    const lengthChildren = cardList.length;
    for(let i = 0; i< lengthChildren; i++)
    {
        cardList[i].innerHTML = array[i];
    }

}


function getShuffledArray(array = []) {
    const lengthOfShuffledArray = array.length - 1;
    for (let i = lengthOfShuffledArray; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        const temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }

    getOrder(array);
}
