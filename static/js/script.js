
var loadFile = function(event) {
    const photos = event.target.files
    const fileListArr = Array.from(photos)
    for (let i = 0; i < photos.length; i++) {
        let html = `
                    <div class = "uploaded-img" id = "${i}">
                        <img id="output${i}">
                        <button type = "button" class = "remove-btn" id = "${i}">
                            <i class = "fas fa-times" id = "${i}"></i>
                        </button>
                    </div>
                `;
        $(".upload-img").append(html);
        var output = document.getElementById(`output${i}`);
        output.src = URL.createObjectURL(photos[i]);
    }
    console.log(photos);
    $(window).click(function(event){
        if($(event.target).hasClass('remove-btn')){
            fileListArr.splice(event.target.id, 1)
            photos = fileListArr.files // here u remove the file
            $(event.target).parent().remove();
        } else if($(event.target).parent().hasClass('remove-btn')){
            fileListArr.splice(event.target.id, 1) // here u remove the file
            photos = fileListArr.files
            $(event.target).parent().parent().remove();
        }
    })
};

