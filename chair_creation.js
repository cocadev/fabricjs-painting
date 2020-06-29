 var chair_number = 1;
 $(document).ready(function () {
    $('#logo').click(function(){
        // var a = document.getElementById("color").style;
        // a.color = randomColor();
        var number = Math.floor(Math.random() * 6) + 1;
       console.log(number)
       if(number==1){
            $('#red').hide()
            $('#green').hide()
            $('#blue').hide()
            $('#yellow').hide()
            $('#black').hide()
            $('#brown').hide()
            $('#red').show()
       }
       else if(number==2){
            $('#red').hide()
            $('#green').hide()
            $('#blue').hide()
            $('#yellow').hide()
            $('#black').hide()
            $('#brown').hide()
            $('#green').show()
       }
       else if(number==3){
            $('#red').hide()
            $('#green').hide()
            $('#blue').hide()
            $('#yellow').hide()
            $('#black').hide()
            $('#brown').hide()
            $('#blue').show()
       }
       else if(number==4){
            $('#red').hide()
            $('#green').hide()
            $('#blue').hide()
            $('#yellow').hide()
            $('#black').hide()
            $('#brown').hide()
            $('#yellow').show()
       }
       else if(number==5){
            $('#red').hide()
            $('#green').hide()
            $('#blue').hide()
            $('#yellow').hide()
            $('#black').hide()
            $('#brown').hide()
            $('#black').show()
       }
       else{
            $('#red').hide()
            $('#green').hide()
            $('#blue').hide()
            $('#yellow').hide()
            $('#black').hide()
            $('#brown').hide()
            $('#brown').show()
       }
    });

    // $('#physical_activity').click(function(){
    //     var physical_activity = $('#physical_activity').val()
    //     console.log(physical_activity)
    //     if(physical_activity=='No'){
    //         $('#activity').hide()
    //     }
    //     else{
    //         $('#activity').show()
    //     }
    //  });

     $('#radiating_symptoms').click(function(){
        var radiating_symptoms = $('#radiating_symptoms').val()
        console.log(radiating_symptoms_yes)
        if(radiating_symptoms=='No'){
            $('#radiating_symptoms_yes').hide()
        }
        else{
            $('#radiating_symptoms_yes').show()
        }
     });

     $('#stenosis').click(function(){
        var stenosis = $('#stenosis').val()
        console.log(stenosis)
        if(stenosis=='No'){
            $('#stenosis_yes').hide()
        }
        else if(stenosis=='Do Not Know'){
            $('#stenosis_yes').hide()
        }
        else{
            $('#stenosis_yes').show()
        }
     });

    $('#chair_creation').click(function(){
        var name=$("#name").val()
        var patient_id=$("#patient_id").val()
        var back_height=$("#back_height").val()
        // var back_width=$("#back_width").val()
        var torso_shoulder=$("#torso_shoulder").val()
        console.log(torso_shoulder)
        var torso_waist=$("#torso_waist").val()
        var torso_pelvis=$("#torso_pelvis").val()        
        var hip_length=$("#hip_length").val()
        // var customer_number=$("#customer_number").val()
        var customer_image = document.getElementById('customer_image');
        var image_path = $("#image_path").val()
        // console.log(image_path)
        // customer_image.src = URL.createObjectURL(event.target.files[0]);
        var sitting_hours=$("#sitting_hours").val()
        var nature_of_work=$("#nature_of_work").val()
        var additional_info1=$("#additional_info1").val()



        var general=$("#general").val()
        // var physical_activity=$("#physical_activity").val()
        // if(physical_activity=='Yes'){
        //     var which_activity=$("#which_activity").val()
        // }

        var disc_herniation=$("#disc_herniation").val()
        var radiating_symptoms = $("#radiating_symptoms").val()
        var choose_location=$("#choose_location").val()
        var stenosis=$("#stenosis").val()
        if(stenosis=='Yes'){
            var height_level=$("#height_level").val()
            var hardware_severiity=$("#hardware_severiity").val()
        }
        var hyperlordosis=$("#hyperlordosis").val()
        var kyphosis=$("#kyphosis").val()
        var scoliosis=$("#scoliosis").val()
        var pain=$("#pain").val()
        var additional_info2=$("#additional_info2").val()

        var chair_length=$("#chair_length").val()
        var chair_width=$("#chair_width").val()
        // var chair_backrest=$("#chair_backrest").val()
        var seat_length=$("#seat_length").val()
        var seat_width=$("#seat_width").val()
        var chair_recline=$("#chair_recline").val()

        var address=$("#address").val()
        var city=$("#city").val()
        var post_office=$("#post_office").val()
        var country=$("#country").val()
       
        if(true || chair_length!='' && chair_width!='' && seat_length!='' && seat_width!=''){
            $('#information1').hide()
            $('#information2').show()
            document.getElementById('person_name').innerHTML=name;
            document.getElementById('name1').innerHTML=name;
            document.getElementById('patient_id1').innerHTML=patient_id;
            document.getElementById('back_height1').innerHTML=back_height;
            // document.getElementById('back_width1').innerHTML=back_width;
            document.getElementById('torso_shoulder1').innerHTML=torso_shoulder;
            document.getElementById('torso_waist1').innerHTML=torso_waist;
            document.getElementById('torso_pelvis1').innerHTML=torso_pelvis;
            document.getElementById('hip_length1').innerHTML=hip_length;
            // document.getElementById('customer_number1').innerHTML=customer_number;
            document.getElementById('customer_image1').innerHTML=customer_image;
            // var customer_image1 = document.getElementById('customer_image1');
            // customer_image1.src = image_path;
            document.getElementById('sitting_hours1').innerHTML=sitting_hours;
            document.getElementById('nature_of_work1').innerHTML=nature_of_work;
            document.getElementById('nature_of_work2').innerHTML=nature_of_work;
            document.getElementById('additional_info11').innerHTML=additional_info1;

            document.getElementById('general1').innerHTML=general;
            document.getElementById('general2').innerHTML=general;
            // document.getElementById('physical_activity1').innerHTML=physical_activity;
            // document.getElementById('physical_activity2').innerHTML=physical_activity;
            // document.getElementById('which_activity1').innerHTML=which_activity;

            document.getElementById('disc_herniation1').innerHTML=disc_herniation;
            document.getElementById('radiating_symptoms1').innerHTML=radiating_symptoms;
            document.getElementById('stenosis1').innerHTML=stenosis;
            document.getElementById('choose_location1').innerHTML=choose_location;
            if(stenosis=='Yes'){
                $('#stenosis').show()
                document.getElementById('height_level1').innerHTML=height_level;
                document.getElementById('hardware_severiity1').innerHTML=hardware_severiity;
            }
            document.getElementById('hyperlordosis1').innerHTML=hyperlordosis;
            document.getElementById('kyphosis1').innerHTML=kyphosis;
            document.getElementById('scoliosis1').innerHTML=scoliosis;
            document.getElementById('pain1').innerHTML=pain;
            document.getElementById('pain2').innerHTML=pain;
            document.getElementById('additional_info22').innerHTML=additional_info2;

            document.getElementById('chair_length1').innerHTML=chair_length;
            document.getElementById('chair_length2').innerHTML=chair_length;
            document.getElementById('chair_width1').innerHTML=chair_width;
            document.getElementById('chair_width2').innerHTML=chair_width;
            // document.getElementById('chair_backrest1').innerHTML=hip_length;
            // document.getElementById('chair_backrest2').innerHTML=hip_length;
            document.getElementById('seat_length1').innerHTML=seat_length;
            document.getElementById('seat_length2').innerHTML=seat_length;
            document.getElementById('seat_width1').innerHTML=seat_width;
            document.getElementById('seat_width2').innerHTML=seat_width;
            document.getElementById('chair_recline1').innerHTML=chair_recline;
            document.getElementById('chair_recline2').innerHTML=chair_recline;

            document.getElementById('address1').innerHTML=address;
            document.getElementById('city1').innerHTML=city;
            document.getElementById('post_office1').innerHTML=post_office;
            document.getElementById('country1').innerHTML=country;

            document.getElementById('address2').innerHTML=address;
            document.getElementById('city2').innerHTML=city;
            document.getElementById('post_office2').innerHTML=post_office;
            document.getElementById('country2').innerHTML=country;


            $('#result').show()
            $('#chair2').hide()
            $('#chair3').hide()
            $('#chair4').hide()
            $('#chair1').show()
            // if(weight>0 && weight<=20){
            //     document.getElementById('person_name').innerHTML=name;
                
            // }
            // else if(weight>20 && weight<=40){
            //     document.getElementById('person_name').innerHTML=name;
            //     $('#chair1').hide()
            //     $('#chair3').hide()
            //     $('#chair4').hide()
            //     $('#chair2').show()
            // }
            // else if(weight>40 && weight<=60){
            //     document.getElementById('person_name').innerHTML=name;
            //     $('#chair1').hide()
            //     $('#chair2').hide()
            //     $('#chair4').hide()
            //     $('#chair3').show()
            // }
            // else if(weight>60 && weight<=2000){
            //     document.getElementById('person_name').innerHTML=name;
            //     $('#chair1').hide()
            //     $('#chair2').hide()
            //     $('#chair3').hide()
            //     $('#chair4').show()
            // }
        }
        else{
            swal({
                    title: "Please Fill Up Mssing Information.",
                    type: "warning",
                    confirmButtonText: "OK"
                })
        }
    });

    $('#plus').click(function(){
       //var number = Math.floor(Math.random() * 5) + 1;
         chair_number ++;
		 if(chair_number > 5)
			 chair_number = 1;
		 
		console.log(chair_number);

		$('#chair1').hide();
		$('#chair2').hide();
		$('#chair3').hide();
		$('#chair4').hide();
		$('#chair5').hide();
		$('#chair'+chair_number).show();
	
    });
    $('#minus').click(function(){
       chair_number --;
		 if(chair_number == 0)
			 chair_number = 1;
		 
		console.log(chair_number);

		$('#chair1').hide();
		$('#chair2').hide();
		$('#chair3').hide();
		$('#chair4').hide();
		$('#chair5').hide();
		$('#chair'+chair_number).show();
    });
	
	

    $('#submit').click(function(){
    swal({
            title: "Information Submitted Successfully.",
            type: "success",
            confirmButtonText: "OK"
        }).then(function () {
            $('#cancel_submit').hide()
            // window.location = "index.html";
        });
    });

    $('#cancel').click(function(){
        window.location = "create_new_chair.html";
    });
    
    $('#editor_btn').click(function(){
       $("#viewer").hide();
       $("#editor").show();
       $('#editor_btn').hide();
       $('#viewer_btn').show();
    });
    $('#viewer_btn').click(function(){
       $("#viewer").show();
       $("#editor").hide();
       $('#viewer_btn').hide();
       $('#editor_btn').show();
     
    });
});
