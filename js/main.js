'use strict'
$('document').ready(() => onInit())


function onInit() {
    renderModals()
    renderProjs()
    $('form').on('submit', () => onSubmitForm(event, this))
    renderFilterByQueryStringParams()
}

function renderProjs() {
    const projs = getProjs()
    $('.projs-container').html(projs.map(proj => `<div data-proj-id="${proj.id}" class="col-md-4 col-sm-6 portfolio-item">
                <a class="portfolio-link" data-toggle="modal" href="#${proj.id}-modal">
                    <div class="portfolio-hover">
                        <div class="portfolio-hover-content">
                            <i class="fa fa-plus fa-3x"></i>
                        </div>
                    </div>
                    <img class="img-fluid" src="img/portfolio/${proj.id}-thumbnail.jpeg" alt="">
                </a>
                <div class="portfolio-caption">
                    <h4>${proj.name}</h4>
                    <p class="text-muted">${proj.subName}</p>
                </div>
            </div>`).join(''))
    addEventListeners()
}

function addEventListeners() {
    $('.portfolio-item a').on('click', function() {
        const $modalName = $(this).closest('.portfolio-item').data('proj-id')
        saveQueryStringParams($modalName)
    })
    $('.close-modal').on('click', ()=>saveQueryStringParams(''))
    $('.offcanvas-btn').on('click', ()=>openCanvas())
    $('.close-form').on('click', ()=>closeCanvas())
}   

function renderModals() {
    const projs = getProjs()
    $('.dynamic-modals-container').html(projs.map(proj => `<div data-proj-modal-id="${proj.id}" class="portfolio-modal modal fade" id="${proj.id}-modal" tabindex="-1" role="dialog" aria-hidden="true">
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="close-modal" data-dismiss="modal">
              <div class="lr">
                <div class="rl"></div>
              </div>
            </div>
            <div class="container">
              <div class="row">
                <div class="col-lg-8 mx-auto">
                  <div class="modal-body">
                    <!-- Project Details Go Here -->
                    <a class="portfolio-link" href="${proj.url}" target="_blank"><h2>${proj.name}</h2></a>
                    <p class="item-intro text-muted">${proj.title}</p>
                    <img class="img-fluid d-block mx-auto" src="img/portfolio/${proj.id}.png" alt="">
                    <p class="item-desc">${proj.desc}</p>
                    <ul class="list-inline golden">
                        <li>Publish date: ${proj.publishedAt}</li>
                        <li>Client: ${proj.client}</li>
                        <li>Category: ${proj.subName}</li>
                    </ul>
                    <button class="btn btn-primary" data-dismiss="modal" type="button">
                      <i class="fa fa-times"></i>
                      Close Project</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>`).join(''))
}

function onSubmitForm(ev) {
    ev.preventDefault()
    const $email = $('#email').val()
    const $subject = $('#subject').val()
    const $textBody = $('#text-body').val()
    closeCanvas()
    window.open(`https://mail.google.com/mail/?view=cm&fs=1&to=${$email}&su=${$subject}&body=${$textBody}`, '_blank');
}

function saveQueryStringParams(currModal) {
    const queryStringParams = `${currModal ? `?modal=${currModal}` : ''}`
    const newUrl = window.location.protocol + "//" + window.location.host + window.location.pathname + queryStringParams
    window.history.pushState({ path: newUrl }, '', newUrl)
}

function renderFilterByQueryStringParams() {
    const queryStringParams = new URLSearchParams(window.location.search)
    const modal = queryStringParams.get('modal') || ''

    $(`#${modal}-modal`).modal()
}