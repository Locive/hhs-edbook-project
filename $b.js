    $(function b() {
        $(":file").change(function b() {
            if (this.files && this.files[0]) {
                var reader = new FileReader();

                reader.onload = imageIsLoaded;
                reader.readAsDataURL(this.files[0]);
            }
        });
    });

    function imageIsLoaded(e) {
        $('#myImg2').attr('src', e.target.result);
        $('#yourImage').attr('src', e.target.result);
    };