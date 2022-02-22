
function show (e) {
    let class_name = e.innerHTML;
    close_others(class_name)
    let classes = document.getElementsByClassName(class_name);
    display_status = classes[0].style.display;
    for (let i = 0 ; i < classes.length ; i++ ) {
        classes[i].style.display = "flex";
    };
};


function close_others (class_name) {
    List = ["Daily","Weekly","Monthly"];
    let index = List.indexOf(class_name);
    List.splice(index, 1);
    for (let i = 0 ; i < List.length ; i++) {
        let classes = document.getElementsByClassName(List[i]);
        for (let i = 0 ; i < classes.length ; i++ ) {
            classes[i].style.display = "none";
    };
};
}