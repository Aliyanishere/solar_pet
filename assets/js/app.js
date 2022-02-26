let section_1_transform_count = 8

window.onscroll = (e) => {
    let scolling = window.scrollY;
    let minheight = window.innerHeight;

    console.log(scolling);

    //second section //

    if (minheight/2 < scolling) {
        document.querySelector('.section-2 ').style = "z-index:12; opacity:1; position:sticky; width:100%; left:0; transition:1s; transform:scale(" + section_1_transform_count + ");"
        if (section_1_transform_count > 1) {
            section_1_transform_count = section_1_transform_count - 1
        }
        document.querySelectorAll('.section-1-hide-on-scroll').forEach(element => {
            element.style = "transform:scale(0);"
        });
        if(section_1_transform_count <= 1){
            document.querySelector('.section-2 .overlay').style=" opacity: 1; transform: scale(1);"
        }
    }
    else{
        document.querySelectorAll('.section-1-hide-on-scroll').forEach(element => {
            element.style = "transform:scale(1);"
        });
        document.querySelector('.section-2 ').style = "z-index:12; opacity:0; position:sticky; width:100%; left:0; transition:1s; transform:scale(" + section_1_transform_count + ");"
        if (section_1_transform_count <= 9) {
            section_1_transform_count = section_1_transform_count + 2
        }
        if(section_1_transform_count >= 1){
            document.querySelector('.section-2 .overlay').style=" opacity: 0; transform: scale(1.2);"
        }
    }

    //second section //

}

