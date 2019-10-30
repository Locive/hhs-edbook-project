    $(function () {
        $("file1").change(function () {
            if (this.files && this.files[0]) {
                var reader = new FileReader();

                reader.onload = imageIsLoaded;
                reader.readAsDataURL(this.files[0]);
            }
        });
    });

    function imageIsLoaded(e) {
        $('image1').attr('src', e.target.result);
        $('image1').attr('src', e.target.result);
        
    };

        $(function () {
        $("file2").change(function () {
            if (this.files && this.files[0]) {
                var reader = new FileReader();

                reader.onload = imageIsLoaded;
                reader.readAsDataURL(this.files[0]);
            }
        });
    });

    function imageIsLoaded(e) {
        $('image2').attr('src', e.target.result);
        $('image2').attr('src', e.target.result);
        
    };

        $(function () {
        $("file2").change(function () {
            if (this.files && this.files[0]) {
                var reader = new FileReader();

                reader.onload = imageIsLoaded;
                reader.readAsDataURL(this.files[0]);
            }
        });
    });

    function imageIsLoaded(e) {
        $('image2').attr('src', e.target.result);
        $('image2').attr('src', e.target.result);
        
    };