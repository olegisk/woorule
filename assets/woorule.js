jQuery(document).ready(function ($) {

    function woorule_error() {
        $('.woorule-subscribe .error').show();
    }

    $('.woorule-subscribe form').submit(function (e) {
        e.preventDefault();
        $('.woorule-subscribe .error').hide();

        let email = $('.woorule-subscribe #semail').val();
        let tags = $('.woorule-subscribe .tag').val();

        if ((!email) || (email.length < 4)) {
            woorule_error();
            return;
        }

        if (!tags) tags = 'Newsletter';

        console.log('Shortcode form input: ' + email);

        $.ajax({
            url: ajax_var.url,
            type: 'post',
            data: {
                action: 'woorule_subscribe_user',
                nonce: ajax_var.nonce,
                email,
                tags
            },
            success(data) {

                if (data == 'ok') {
                    $('.woorule-subscribe .form_elem').hide();
                    $('.woorule-subscribe .success').show();
                    console.log(data);

                } else {
                    woorule_error();
                    return;
                }

            },
        });

    });

});