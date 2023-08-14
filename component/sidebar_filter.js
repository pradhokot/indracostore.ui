document.write(` 
	<!-- offcanvas sidebar (filter & urutkan) -->
	<div class="offcanvas-lg offcanvas-start text-reset" data-bs-backdrop="static" data-bs-scroll="true" data-bs-backdrop="false" tabindex="-1" id="offcanvasFilter" aria-labelledby="offcanvasFilterLabel">
		<div class="offcanvas-header">
			<h5 class="offcanvas-title opacity-50" id="offcanvasFilterLabel">
				<i class="bi bi-funnel"></i> Saring Produk
			</h5>
			<button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close" data-bs-toggle="offcanvas" data-bs-target="#offcanvasFilter"></button>
		</div>
		<div class="offcanvas-body flex-lg-column">

			<!-- accordion menu (filter on mobile) -->
			<div class="accordion accordion-flush text-reset mb-lg-5" id="accordionFilter">
				<div class="accordion-item text-reset">
					<h2 class="accordion-header">
						<button class="accordion-button text-reset px-0 fw-medium" type="button" data-bs-toggle="collapse" data-bs-target="#accordion-collapse-kategori" aria-expanded="false" aria-controls="accordion-collapse-kategori">
							KATEGORI
						</button>
					</h2>
					<div id="accordion-collapse-kategori" class="accordion-collapse collapse show" data-bs-parent="#accordionFilter">
						<div class="accordion-body px-0">
							<div class="form-check">
								<input class="form-check-input rounded-circle" type="checkbox" value="" id="kategoriKopi">
								<label class="form-check-label btn w-100 text-start rounded-0" for="kategoriKopi">
									kopi
								</label>
							</div>
							<div class="form-check">
								<input class="form-check-input rounded-circle" type="checkbox" value="" id="kategoriJahe">
								<label class="form-check-label btn w-100 text-start rounded-0" for="kategoriJahe">
									jahe
								</label>
							</div>
							<div class="form-check">
								<input class="form-check-input rounded-circle" type="checkbox" value="" id="kategoriCokelat">
								<label class="form-check-label btn w-100 text-start rounded-0" for="kategoriCokelat">
									cokelat
								</label>
							</div>
						</div>
					</div>
				</div>

				<div class="accordion-item text-reset">
					<h2 class="accordion-header">
						<button class="accordion-button text-reset px-0 fw-medium collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#accordion-collapse-merek" aria-expanded="false" aria-controls="accordion-collapse-merek">
							MEREK
						</button>
					</h2>
					<div id="accordion-collapse-merek" class="accordion-collapse collapse" data-bs-parent="#accordionFilter">
						<div class="accordion-body px-0">
							<div class="form-check">
								<input class="form-check-input rounded-circle" type="checkbox" value="" id="merekBalicafe">
								<label class="form-check-label btn w-100 text-start rounded-0" for="merekBalicafe">
									BaliCafe
								</label>
							</div>
							<div class="form-check">
								<input class="form-check-input rounded-circle" type="checkbox" value="" id="merekUcafe">
								<label class="form-check-label btn w-100 text-start rounded-0" for="merekUcafe">
									UCAFÉ
								</label>
							</div>
							<div class="form-check">
								<input class="form-check-input rounded-circle" type="checkbox" value="" id="merekRS">
								<label class="form-check-label btn w-100 text-start rounded-0" for="merekRS">
									rasa sayang
								</label>
							</div>
							<div class="form-check">
								<input class="form-check-input rounded-circle" type="checkbox" value="" id="merekTB">
								<label class="form-check-label btn w-100 text-start rounded-0" for="merekTB">
									tugu buaya
								</label>
							</div>
							<div class="form-check">
								<input class="form-check-input rounded-circle" type="checkbox" value="" id="merekUE">
								<label class="form-check-label btn w-100 text-start rounded-0" for="merekUE">
									uang emas
								</label>
							</div>
							<div class="form-check">
								<input class="form-check-input rounded-circle" type="checkbox" value="" id="merekHC">
								<label class="form-check-label btn w-100 text-start rounded-0" for="merekHC">
									hao cafe
								</label>
							</div>
							<div class="form-check">
								<input class="form-check-input rounded-circle" type="checkbox" value="" id="merekBrochoco">
								<label class="form-check-label btn w-100 text-start rounded-0" for="merekBrochoco">
									BROCHOCO
								</label>
							</div>
							<div class="form-check">
								<input class="form-check-input rounded-circle" type="checkbox" value="" id="merekJaheku">
								<label class="form-check-label btn w-100 text-start rounded-0" for="merekJaheku">
									jaheku
								</label>
							</div>
						</div>
					</div>
				</div>

				<div class="accordion-item text-reset">
					<h2 class="accordion-header">
						<button class="accordion-button text-reset px-0 fw-medium collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#accordion-collapse-kemasan" aria-expanded="false" aria-controls="accordion-collapse-kemasan">
							KEMASAN
						</button>
					</h2>
					<div id="accordion-collapse-kemasan" class="accordion-collapse collapse" data-bs-parent="#accordionFilter">
						<div class="accordion-body px-0">
							<div class="form-check">
								<input class="form-check-input rounded-circle" type="checkbox" value="" id="kemasanBag">
								<label class="form-check-label btn w-100 text-start rounded-0" for="kemasanBag">
									Bag
								</label>
							</div>
							<div class="form-check">
								<input class="form-check-input rounded-circle" type="checkbox" value="" id="kemasanBox">
								<label class="form-check-label btn w-100 text-start rounded-0" for="kemasanBox">
									Box
								</label>
							</div>
							<div class="form-check">
								<input class="form-check-input rounded-circle" type="checkbox" value="" id="kemasanRenceng">
								<label class="form-check-label btn w-100 text-start rounded-0" for="kemasanRenceng">
									Renceng
								</label>
							</div>
							<div class="form-check">
								<input class="form-check-input rounded-circle" type="checkbox" value="" id="kemasanSachet">
								<label class="form-check-label btn w-100 text-start rounded-0" for="kemasanSachet">
									Sachet
								</label>
							</div>
							<div class="form-check">
								<input class="form-check-input rounded-circle" type="checkbox" value="" id="kemasanTupper">
								<label class="form-check-label btn w-100 text-start rounded-0" for="kemasanTupper">
									Tupper
								</label>
							</div>
						</div>
					</div>
				</div>

				<div class="accordion-item text-reset d-none d-lg-block">
					<h2 class="accordion-header">
						<button class="accordion-button text-reset px-0 fw-medium collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#accordion-collapse-urutkan" aria-expanded="false" aria-controls="accordion-collapse-urutkan">
							URUTKAN
						</button>
					</h2>
					<div id="accordion-collapse-urutkan" class="accordion-collapse collapse" data-bs-parent="#accordionFilter">
						<div class="accordion-body px-0">
							<script type="text/javascript" src="component/sort_product.js"></script>
						</div>
					</div>
				</div>

				<div class="accordion-item text-reset">
					<h2 class="accordion-header">
						<button class="accordion-button text-reset px-0 fw-medium collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#accordion-collapse-harga" aria-expanded="false" aria-controls="accordion-collapse-harga">
							HARGA
						</button>
					</h2>
					<div id="accordion-collapse-harga" class="accordion-collapse collapse" data-bs-parent="#accordionFilter">
						<div class="accordion-body px-0">
							<p class="d-flex justify-content-between align-items-center flex-nowrap column-gap-3">
								<span>Rp 0,-</span>
								<span>Rp 123.000,-</span>
							</p>
							<div style="padding: 0 12px;">
								<div id="range"></div>
							</div>
						</div>
					</div>
				</div>
			</div>
			<style type="text/css">
				@media (min-width: 992px) {
					#accordionFilter {
						width: 216px;
						margin-top: -1rem;
					}
				}

				#accordionFilter .accordion-button {
					color: #565656 !important;
					background-color: transparent !important;
					background-image: linear-gradient(to right, #f2f2f2, transparent);
					box-shadow: unset !important;
					padding-left: .75rem !important;
					transition: all .36s !important;
				}

				#accordionFilter .accordion-button.collapsed {
					color: #878787 !important;
					background-image: linear-gradient(to right, transparent, transparent);
					padding-left: 0 !important;
				}

				#accordionFilter .accordion-button::after {
					opacity: .5 !important;
				}
			</style>

			<div class="d-none d-lg-flex flex-column row-gap-1">
				<script type="text/javascript" src="component/trigger_filter.js"></script>
			</div>
			
		</div>
		<div class="offcanvas-header column-gap-2">
			<script type="text/javascript" src="component/trigger_filter.js"></script>
		</div>
	</div>

	<!-- offcanvas sidebar urutkan -->
	<div class="offcanvas-lg offcanvas-end d-lg-none" data-bs-backdrop="static" data-bs-scroll="true" data-bs-backdrop="false" tabindex="-1" id="offcanvasSort" aria-labelledby="offcanvasSortLabel">
		<div class="offcanvas-header">
			<h5 class="offcanvas-title opacity-50" id="offcanvasSortLabel">
				<i class="bi bi-sort-down"></i> Urutkan Produk
			</h5>
			<button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close" data-bs-toggle="offcanvas" data-bs-target="#offcanvasSort"></button>
		</div>
		<div class="offcanvas-body">
			<div>
				<script type="text/javascript" src="component/sort_product.js"></script>
			</div>
		</div>
		<div class="offcanvas-header column-gap-2">
			<script type="text/javascript" src="component/trigger_filter.js"></script>
		</div>
	</div> 
	`)