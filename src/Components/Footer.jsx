import React from 'react'
import "./Footer.css"
import Love from "./love-beating.gif"
function Footer() {
    return (<div>
        <footer class="footer" id="footer">
            <div class="container bottom_border">
                <div class="row">
                <div class=" col-sm-4 col-md  col-6 col">
                        <h5 class="headin5_amrc col_white_amrc pt2" style={{color:"white"}}>Quick links</h5>

                        <ul class="footer_ul_amrc">
                            <li><a href="/">Home</a></li>
                            <li><a href="/medical">Medical</a></li>
                            <li><a href="/ourprograms">course</a></li>
                            <li><a href="/ATAl Tinkering Lab">ATAl Tinkering Lab</a></li>
                            <li><a href="#">Blog</a></li>
                            <li><a href="/Privacy Policy">Privacy Policy</a></li>
                            <li><a href="/Terms And Condition">Terms And Condition</a></li>
                            <li><a href="/For Partnership">For Partnership</a></li>
                            <li><a href="/bookyourfreesession">Book Your Free session</a></li>
                        </ul>

                    </div>
                    <div class=" col-sm-4 col-md col-sm-4  col-12 col">
                        <h5 class="headin5_amrc col_white_amrc pt2" style={{color:"white"}}>Contact Us</h5>
                         <p>Phone No: +91 7501541670 </p>
                        <p> & +91 8250186278</p>
                        <p><strong>Email : </strong> contact@qnovatelabs.com</p>
                        <p>Campus:11, KIIT-TBI, Room No:301, Patia, Bhubanewar, Odisha, 751024</p>


                    </div>


                    


                    <div class=" col-sm-4">
                    <div className='row container'>
                        <h5 class="headin5_amrc col_white_amrc pt2" style={{color:"white"}}>Follow Us</h5>

                        <ul class="foote_bottom_ul_amrc">
                        <li ><a href="
                        https://www.facebook.com/qnovatelabs"
                        style={{fontSize:"25px"}}><i class="fab fa-facebook-f"></i></a></li>
                      
                        <li><a href="https://www.instagram.com/qnovatelabs/" style={{fontSize:"25px"}}><i class="fab fa-instagram"></i></a></li>
                        <li><a href="https://www.youtube.com/channel/UCpaExejHnFP9LnJxVsUvfLA" style={{fontSize:"25px"}}><i class="fab fa-youtube"></i></a></li>
                        </ul>
</div>
                    </div>

                </div>
            </div>
            <div class="container">
                <ul class="foote_bottom_ul_amrc">
                    <li><a href="/">Home</a></li>
                    <li><a href="/about">About</a></li>
                    <li><a href="#contactus">Contact Us</a></li>
                    <li><a href="/blog">Blog</a></li>
                    
                </ul>
               
<div className='row'>
                <p class="text-center" style={{fontSize:"15px"}}>Copyright @ Fluidex Technologies Pvt. Ltd. @ 2022. All Rights Reserved.</p>
               
</div>

                <ul class="social_footer_ul">
                  
                </ul>

            </div>

        </footer>
    </div>
    )

}

        export default Footer;