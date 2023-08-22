document.write(`
	<div class="card card-produk rounded-0 border-0 text-reset text-center h-100 stok-habis">
	    <a class="text-decoration-none text-reset d-inline bg-light" href="#" style="flex-grow: 0;">
	        <div class="ratio ratio-1x1">
	        	<div class="wording-stok-habis top-50 start-50 translate-middle" style="background-color: #f2f2f2c5; z-index: 100;">
	        		<h5 class="fw-medium text-center fs-4">STOK <br class="d-lg-none"> HABIS</h5>
	        	</div>
	        	<div class="top-50 start-50 translate-middle d-flex justify-content-center align-items-center z-3">
		        	<div class="spinner-border text-dark" role="status"></div>
	        	</div>
	            <img src="assets/img/product/produk.png" class="bg-light z-2" alt="...">
	            <!--
	            <img src="assets/img/product/no_images.svg" class="z-1" alt="...">
	            -->
	        </div>
	    </a>
	    <div class="card-body bg-light d-flex flex-column" style="flex: 1 1 auto;">
	        <div style="flex: 1 1 auto;">
	            <h3 class="card-title fs-reset mb-1 opacity-75"><small>kopi</small></h3>
	            <h4 class="card-title fs-reset mb-0 fw-medium">UCAFÉ Kopi Instan Cappuccino R10</h4>
	            <p class="card-text my-2"><small>Renceng (10 sachets x 25g)</small></p>
	        </div>
	        <div class="harga-produk" style="flex-grow: 0;">
	            <!-- <div class="harga-normal fw-medium">Rp 14.700,-</div> -->
	            <div class="harga-promo">
	                <span class="harga-reguler opacity-75"><del>Rp 14.700,-</del></span>
	                <span class="harga-diskon fw-medium">Rp 13.500,-</span>
	            </div>
	        </div>
	    </div>
	    <div class="card-footer p-0 border-0 rounded-0">
	        <a class="btn btn-dark w-100 rounded-0" href="#">BELI</a>
	    </div>
	</div>
	`)
