let navbar=()=>{
    return `<div id="navbar1">
    <div id="marketplace"><p>Marketplace</p></div>
    <div id="help"><p>Help & FAQs</p></div>
    <div id="imga">
        <img id="im" src="https://assets.asosservices.com/storesa/images/flags/in.png" alt="flag">
    </div>
</div>
<div id="navbar2">
<div id="navbar21">
<div id="aso">
<a href="../homepage/index.html"><img id="logoim" src="https://th.bing.com/th/id/OIP.pTUeu628D1e8zAR5RSmAZgHaFs?w=212&h=180&c=7&r=0&o=5&dpr=1.25&pid=1.7" alt=""></a>
</div>
<a href="index.html"><div id="women">
<h3 id="colorw">WOMEN</h3>
</div></a>
<a href="men.html"><div id="men">
<h3 id="colorm">MEN</h3>
</div></a>
</div>
<div id="navbar22">
<div id="search">

<div id="searchbar">
<p id="ptag">Search for items and brands</p>
</div>
<div id="searchlogo">
<i class="fa-solid fa-magnifying-glass"></i>
</div>

</div>
<div id="loginlogo">
<a href="../signin/signin.html"><i class="fa-regular fa-user"></i></a>

</div>
<div id="heart">
<i class="fa-regular fa-heart"></i>
</div>
<div id="bag">
<a href="../payment/order.html"><i class="fa-solid fa-bag-shopping"></i></a>

</div>
</div>
</div>
<div id="navbar3">
<div id=nav3child>
<div class="sale">Sale</div>

<div class="des">New in</div>
<div class="des">Clothing</div>
<div class="des">Dresses</div>
<div class="des">Shoes</div>
<div class="des">Sportswear</div>
<div class="des">Accessories</div>
<div class="des">Summer</div>
<div class="des">Trending now</div>
<div class="des">Topshop</div>
<div class="des">Face+Body</div>
<div class="des">Brands</div>
<div class="sale">Outlet</div>
<div class="des">Marketplace</div>
</div>

</div>
`
}
let footer=()=>{
    return `<div id="media">
    <div>
        <img src="https://th.bing.com/th/id/OIP.Ua5AXhtGRgPuisZVmetclQHaFL?w=292&h=205&c=7&r=0&o=5&dpr=1.25&pid=1.7" alt="">
    </div>
    <div>
        <img src="https://th.bing.com/th/id/OIP.TxVY_Guy5LPYqKN5wJ7SsQHaHa?w=181&h=181&c=7&r=0&o=5&dpr=1.25&pid=1.7" alt="">
    </div>
    <div>
        <img src="https://th.bing.com/th/id/OIP.clKyTHcV_CONlLrP0GP7bQHaHx?w=174&h=183&c=7&r=0&o=5&dpr=1.25&pid=1.7" alt="">
    </div>
    <div>
        <img src="https://th.bing.com/th/id/OIP.Fh3VxQRxG0ZEt2mCfL0qrwHaFj?w=240&h=180&c=7&r=0&o=5&dpr=1.25&pid=1.7" alt="">
    </div>
    <div>
        <img src="data:image/jpeg;base64,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" alt="">
    </div>
    <div>
        <img src="https://th.bing.com/th/id/OIP.Iw1L-glXlAVTQ9WqmaocZQHaHT?w=186&h=184&c=7&r=0&o=5&dpr=1.25&pid=1.7" alt="">
    </div>
    <div>
        <img src="https://th.bing.com/th/id/OIP.K8JeHRC0FaGz0fhkMNkQ0wHaHb?w=186&h=187&c=7&r=0&o=5&dpr=1.25&pid=1.7" alt="">
    </div>
    <div>
        <img src="https://th.bing.com/th/id/OIP.DhQzQBjrmi87YiWHhsGu5AHaEo?w=265&h=180&c=7&r=0&o=5&dpr=1.25&pid=1.7" alt="">
    </div>
 </div>
 <div id="foot">
    <div>
        <h3>HELP & INFORMATION</h3>
        <p>Help</p>
        <p>Track orders</p>
        <p>Delivery and returns</p>
    </div>
    <div>
        <h3>ABOUT ASOS</h3>
        <p>About us</p>
        <p>Careers at ASOS</p>
        <p>Corporate responsibility</p>
        <p>Investor's site</p>
    </div>
    <div>
        <h3>MORE FROM ASOS</h3>
        <p>Mobile and ASOS apps</p>
        <p>ASOS Marketplace</p>
        <p>Gift vouchers</p>
        <p>Black Friday</p>
        <p>ASOS x Thrift+</p>
    </div>
    <div>
        <h3>SHOPPING FROM:</h3>
        <p>you're in</p> <img src="https://assets.asosservices.com/storesa/images/flags/in.png" alt=""> <h3>CHANGE</h3>
    </div>
 </div>
 <div id="footer">
    <div id="footleft">
        <div><i class="fa-regular fa-copyright"></i></div>
        <div><p>2022 ASOS</p></div></div>
    <div id="footright">
        <div><p>Privacy & Cookies</p></div>
        <div>Ts&Cs</div>
        <div>Accessibility</div>
    </div>
   
 </div>`
}
export {navbar,footer} 








