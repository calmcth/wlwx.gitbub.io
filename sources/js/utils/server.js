;(function ($) {
    "use strict";

    $.server = {
        res: function ( service_id, param,type) {
            if ( typeof(param) === "undefined") {
                param ={};
            }
            var ApiPath = window.globalConfig.basePath+service_id;
            return new Promise(function(resolve,reject){
                $.ajax({
                    url: ApiPath,
                    data: {
                        content: JSON.stringify(param)
                    },
                    type: type ? type : 'POST',
                    timeout: 30000,
                    dataType: "json",
                    contentType: "application/json",
                    success: function (data) {
                        console.log(data);
                        var ress=data;
                        if(~~ress.r_code===900){
                            return reject(ress);
                        }
                        if(~~ress.r_code===200){
                            return resolve(ress.r_content);
                        }
                        return reject(ress);
                    },
                    beforeSend: function (xhr) {

                    },
                    error: function (xhr) {
                        return reject(xhr);
                    }
                });
            });
        }
    }
})(jQuery);