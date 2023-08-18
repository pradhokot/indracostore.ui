document.write(`
	<nav id="mainMenu" class="bg-light sticky-top border-bottom border-secondary">
	    <div class="overflow-x-auto">
	        <ul id="mainMenuBar" class="nav text-uppercase flex-nowrap text-nowrap justify-content-sm-center py-1 py-lg-0">
	            <li class="nav-item">
	                <a class="nav-link collapsed" data-bs-toggle="collapse" data-bs-target="#collapseProducts" href="https://indracostore.com/">
	                    <h4 class="lh-reset fs-reset mb-0">products</h4>
	                </a>
	            </li>
	            <li class="nav-item">
	                <a class="nav-link collapsed" data-bs-toggle="collapse" data-bs-target="#collapseME" href="#">
	                    <h4 class="lh-reset fs-reset mb-0">machine & equipment</h4>
	                </a>
	            </li>
	            <li class="nav-item">
	                <a class="nav-link collapsed" data-bs-toggle="collapse" data-bs-target="#collapsePromo" href="#">
	                    <h4 class="lh-reset fs-reset mb-0">promo</h4>
	                </a>
	            </li>
	        </ul>
	        <style type="text/css">
	            #mainMenuBar > li {
	                position: relative;
	            }

	            #mainMenuBar > li::before {
	                content: '';
	                width: 1px;
	                height: 56%;
	                position: absolute;
	                top: 50%;
	                left: 100%;
	                transform: translate(-50%, -50%);
	                background-color: rgba(0, 0, 0, .25);
	            }

	            #mainMenuBar > li:last-of-type::before {
	                background-color: rgba(0, 0, 0, 0);
	            }

	            #mainMenuBar > li > a {
	                color: inherit;
	                opacity: 1;
	                font-family: 'HelveticaNeue Medium';
	                font-weight: 500;
	                position: relative;
	            }

	            #mainMenuBar > li > a.collapsed {
	                opacity: .65;
	                font-family: 'HelveticaNeue';
	                font-weight: 400;
	            }

	            #mainMenuBar > li > a::before {
	                content: '';
	                width: calc(100% - 2rem);
	                height: 3px;
	                background-color: rgba(0, 0, 0, .875);
	                position: absolute;
	                top: 100%;
	                left: 50%;
	                transform: translate(-50%, -100%);
	            }

	            #mainMenuBar > li > a.collapsed::before {
	                background-color: rgba(0, 0, 0, 0);
	            }
	        </style>
	    </div>

	    <div class="container">
	        <div class="collapse fade" id="collapseProducts" data-bs-parent="#mainMenu">
	            <div class="pt-3 pb-4">
	                <h5 class="fs-3 fw-medium">Products</h5>
	                <hr class="opacity-50">
	                <div class="row gx-lg-5">
	                    <div class="col col-12 col-lg-auto">
	                        <ul class="nav flex-column text-capitalize" style="width: 100%; min-width: calc(175px + 1vw);">
	                            <li class="nav-item">
	                                <a class="nav-link px-0 active" data-bs-target="#tabSupresso" href="https://www.supresso.com/id/public/" target="_blank">
	                                    <h3 class="fs-reset lh-1 mb-0">supresso</h3>
	                                </a>
	                            </li>
	                            <li class="nav-item">
	                                <a class="nav-link px-0" data-bs-target="#tabBalicafe">
	                                    <h3 class="fs-reset lh-1 mb-0">BaliCafé</h3>
	                                </a>
	                            </li>
	                            <li class="nav-item">
	                                <a class="nav-link px-0" data-bs-target="#tabUcafe">
	                                    <h3 class="fs-reset lh-1 mb-0">UCAFÉ</h3>
	                                </a>
	                            </li>
	                            <li class="nav-item">
	                                <a class="nav-link px-0" data-bs-target="#tabRS">
	                                    <h3 class="fs-reset lh-1 mb-0">rasa sayang</h3>
	                                </a>
	                            </li>
	                            <li class="nav-item">
	                                <a class="nav-link px-0" data-bs-target="#tabTB">
	                                    <h3 class="fs-reset lh-1 mb-0">tugu buaya</h3>
	                                </a>
	                            </li>
	                            <li class="nav-item">
	                                <a class="nav-link px-0" data-bs-target="#tabUE">
	                                    <h3 class="fs-reset lh-1 mb-0">uang emas</h3>
	                                </a>
	                            </li>
	                            <li class="nav-item">
	                                <a class="nav-link px-0" data-bs-target="#tabHC">
	                                    <h3 class="fs-reset lh-1 mb-0">hao cafe</h3>
	                                </a>
	                            </li>
	                            <li class="nav-item">
	                                <a class="nav-link px-0" data-bs-target="#tabBrochoco">
	                                    <h3 class="fs-reset lh-1 mb-0">BROCHOCO</h3>
	                                </a>
	                            </li>
	                            <li class="nav-item">
	                                <a class="nav-link px-0" data-bs-target="#tabJaheku">
	                                    <h3 class="fs-reset lh-1 mb-0">jaheku</h3>
	                                </a>
	                            </li>
	                        </ul>
	                        <style type="text/css">
	                            #collapseProducts .nav-link {
	                                position: relative;
	                                cursor: pointer;
	                            }

	                            #collapseProducts .nav-link::before {
	                                content: "\f285";
	                                font-family: "bootstrap-icons";
	                                position: absolute;
	                                top: 50%;
	                                left: 100%;
	                                transform: translate(-100%, -50%);
	                                color: inherit !important;
	                                opacity: .5;
	                            }
	                        </style>
	                    </div>
	                    <div class="col col-12 col-lg d-none d-lg-block">
	                        <div class="tab-content">

	                            <div class="tab-pane fade show active" id="tabSupresso">
	                                <div class="row gx-5">
	                                    <div class="col col-8">
	                                        <h4 class="text-capitalize fw-medium">supresso</h4>
	                                        <p>
	                                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium voluptates omnis aspernatur veritatis commodi voluptatum ipsam excepturi, ab voluptatibus beatae culpa nisi earum perspiciatis suscipit ullam eum reprehenderit enim nobis.
	                                        </p>
	                                    </div>
	                                    <div class="col col-4">
	                                        <div class="ratio ratio-1x1 bg-secondary rounded overflow-hidden"></div>
	                                    </div>
	                                </div>
	                            </div>

	                            <div class="tab-pane fade" id="tabBalicafe">
	                                <div class="row gx-5">
	                                    <div class="col col-8">
	                                        <h4 class="text-capitalize fw-medium">BaliCafé</h4>
	                                        <p>
	                                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium voluptates omnis aspernatur veritatis commodi voluptatum ipsam excepturi, ab voluptatibus beatae culpa nisi earum perspiciatis suscipit ullam eum reprehenderit enim nobis.
	                                        </p>
	                                    </div>
	                                    <div class="col col-4">
	                                        <div class="ratio ratio-1x1 bg-secondary rounded overflow-hidden"></div>
	                                    </div>
	                                </div>
	                            </div>

	                            <div class="tab-pane fade" id="tabUcafe">
	                                <div class="row gx-5">
	                                    <div class="col col-8">
	                                        <h4 class="text-capitalize fw-medium">UCAFÉ</h4>
	                                        <p>
	                                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium voluptates omnis aspernatur veritatis commodi voluptatum ipsam excepturi, ab voluptatibus beatae culpa nisi earum perspiciatis suscipit ullam eum reprehenderit enim nobis.
	                                        </p>
	                                    </div>
	                                    <div class="col col-4">
	                                        <div class="ratio ratio-1x1 bg-secondary rounded overflow-hidden"></div>
	                                    </div>
	                                </div>
	                            </div>

	                            <div class="tab-pane fade" id="tabRS">
	                                <div class="row gx-5">
	                                    <div class="col col-8">
	                                        <h4 class="text-capitalize fw-medium">rasa sayang</h4>
	                                        <p>
	                                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium voluptates omnis aspernatur veritatis commodi voluptatum ipsam excepturi, ab voluptatibus beatae culpa nisi earum perspiciatis suscipit ullam eum reprehenderit enim nobis.
	                                        </p>
	                                    </div>
	                                    <div class="col col-4">
	                                        <div class="ratio ratio-1x1 bg-secondary rounded overflow-hidden"></div>
	                                    </div>
	                                </div>
	                            </div>

	                            <div class="tab-pane fade" id="tabTB">
	                                <div class="row gx-5">
	                                    <div class="col col-8">
	                                        <h4 class="text-capitalize fw-medium">tugu buaya</h4>
	                                        <p>
	                                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium voluptates omnis aspernatur veritatis commodi voluptatum ipsam excepturi, ab voluptatibus beatae culpa nisi earum perspiciatis suscipit ullam eum reprehenderit enim nobis.
	                                        </p>
	                                    </div>
	                                    <div class="col col-4">
	                                        <div class="ratio ratio-1x1 bg-secondary rounded overflow-hidden"></div>
	                                    </div>
	                                </div>
	                            </div>

	                            <div class="tab-pane fade" id="tabUE">
	                                <div class="row gx-5">
	                                    <div class="col col-8">
	                                        <h4 class="text-capitalize fw-medium">uang emas</h4>
	                                        <p>
	                                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium voluptates omnis aspernatur veritatis commodi voluptatum ipsam excepturi, ab voluptatibus beatae culpa nisi earum perspiciatis suscipit ullam eum reprehenderit enim nobis.
	                                        </p>
	                                    </div>
	                                    <div class="col col-4">
	                                        <div class="ratio ratio-1x1 bg-secondary rounded overflow-hidden"></div>
	                                    </div>
	                                </div>
	                            </div>

	                            <div class="tab-pane fade" id="tabHC">
	                                <div class="row gx-5">
	                                    <div class="col col-8">
	                                        <h4 class="text-capitalize fw-medium">hao cafe</h4>
	                                        <p>
	                                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium voluptates omnis aspernatur veritatis commodi voluptatum ipsam excepturi, ab voluptatibus beatae culpa nisi earum perspiciatis suscipit ullam eum reprehenderit enim nobis.
	                                        </p>
	                                    </div>
	                                    <div class="col col-4">
	                                        <div class="ratio ratio-1x1 bg-secondary rounded overflow-hidden"></div>
	                                    </div>
	                                </div>
	                            </div>

	                            <div class="tab-pane fade" id="tabBrochoco">
	                                <div class="row gx-5">
	                                    <div class="col col-8">
	                                        <h4 class="text-capitalize fw-medium">BROCHOCO</h4>
	                                        <p>
	                                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium voluptates omnis aspernatur veritatis commodi voluptatum ipsam excepturi, ab voluptatibus beatae culpa nisi earum perspiciatis suscipit ullam eum reprehenderit enim nobis.
	                                        </p>
	                                    </div>
	                                    <div class="col col-4">
	                                        <div class="ratio ratio-1x1 bg-secondary rounded overflow-hidden"></div>
	                                    </div>
	                                </div>
	                            </div>

	                            <div class="tab-pane fade" id="tabJaheku">
	                                <div class="row gx-5">
	                                    <div class="col col-8">
	                                        <h4 class="text-capitalize fw-medium">jaheku</h4>
	                                        <p>
	                                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium voluptates omnis aspernatur veritatis commodi voluptatum ipsam excepturi, ab voluptatibus beatae culpa nisi earum perspiciatis suscipit ullam eum reprehenderit enim nobis.
	                                        </p>
	                                    </div>
	                                    <div class="col col-4">
	                                        <div class="ratio ratio-1x1 bg-secondary rounded overflow-hidden"></div>
	                                    </div>
	                                </div>
	                            </div>

	                        </div>
	                    </div>
	                </div>
	            </div>
	        </div>

	        <div class="collapse fade" id="collapseME" data-bs-parent="#mainMenu">
	            <div class="pt-3 pb-4">
	                <h5 class="fs-3 fw-medium">Machine & Equipment</h5>
	                <hr class="opacity-50">
	                <p>
	                    Lorem, ipsum dolor, sit amet consectetur adipisicing elit. Iusto officiis omnis earum officia magnam a, magni recusandae sint cum, perspiciatis deleniti, voluptates commodi cupiditate qui debitis rem soluta, aspernatur molestiae!
	                </p>
	            </div>
	        </div>

	        <div class="collapse fade" id="collapsePromo" data-bs-parent="#mainMenu">
	            <div class="pt-3 pb-4">
	                <h5 class="fs-3 fw-medium">Promo</h5>
	                <hr class="opacity-50">
	                <div class="overflow-x-auto">
	                    <div class="hstack gap-3">
	                        <a class="text-decoration-none text-reset" href="#">
	                            <div class="ratio ratio-4x3 bg-secondary rounded" style="min-width: 210px;"></div>
	                        </a>
	                        <a class="text-decoration-none text-reset" href="#">
	                            <div class="ratio ratio-4x3 bg-secondary rounded" style="min-width: 210px;"></div>
	                        </a>
	                        <a class="text-decoration-none text-reset" href="#">
	                            <div class="ratio ratio-4x3 bg-secondary rounded" style="min-width: 210px;"></div>
	                        </a>
	                        <a class="text-decoration-none text-reset" href="#">
	                            <div class="ratio ratio-4x3 bg-secondary rounded" style="min-width: 210px;"></div>
	                        </a>
	                        <a class="text-decoration-none text-reset" href="#">
	                            <div class="ratio ratio-4x3 bg-secondary rounded" style="min-width: 210px;"></div>
	                        </a>
	                        <a class="text-decoration-none text-reset" href="#">
	                            <div class="ratio ratio-4x3 bg-secondary rounded" style="min-width: 210px;"></div>
	                        </a>
	                    </div>
	                </div>
	            </div>
	        </div>
	    </div>
	</nav>
	`)