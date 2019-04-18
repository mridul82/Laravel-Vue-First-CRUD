<template>
    <section>
          <section class="intro-single">
    <div class="container">
      <div class="row">
        <div class="col-md-12 col-lg-8">
          <div class="title-single-box">
            <h1 class="title-single">Contact US</h1>
            <span class="color-text-a">Aut voluptas consequatur unde sed omnis ex placeat quis eos. Aut natus officia corrupti qui autem fugit consectetur quo. Et ipsum eveniet laboriosam voluptas beatae possimus qui ducimus. Et voluptatem deleniti. Voluptatum voluptatibus amet. Et esse sed omnis inventore hic culpa.</span>
          </div>
        </div>
        <div class="col-md-12 col-lg-4">
          <nav aria-label="breadcrumb" class="breadcrumb-box d-flex justify-content-lg-end">
            <ol class="breadcrumb">
              <li class="breadcrumb-item">
                <a :href="'/'">Home</a>
              </li>
              <li class="breadcrumb-item active" aria-current="page">
                Contact
              </li>
            </ol>
          </nav>
        </div>
      </div>
    </div>
  </section>
  <div class="google-map" :id="mapName"></div>
    <section>
        <div class="col-sm-12 section-t8">
          <div class="row">
            <div class="col-md-7">
               <div v-if="success" class="alert alert-success mt-3">
                    Message sent!
                </div>
                <div id="errormessage"></div>
                   <form @submit.prevent="submit">
                <div class="row">
                    <div class="col-md-6 mb-3">
                        <div class="form-group">
                            <input type="text" name="name" class="form-control form-control-lg form-control-a" placeholder="Your Name" data-rule="minlen:4" data-msg="Please enter at least 4 chars" v-model="fields.name">
                        <div class="validation text-danger" v-if="errors && errors.name">{{errors.name[0]}}</div>
                        </div>
                    </div>
                    
                  <div class="col-md-6 mb-3">
                    <div class="form-group">
                      <input name="email" type="email" class="form-control form-control-lg form-control-a" placeholder="Your Email" data-rule="email" data-msg="Please enter a valid email" v-model="fields.email">
                      <div class="validation text-danger" v-if="errors && errors.email">{{errors.email[0]}}</div>
                    </div>
                  </div>
                  </div>
                  <div class="col-md-12 mb-3">
                    <div class="form-group">
                      <input type="url" name="subject" class="form-control form-control-lg form-control-a" placeholder="Subject" data-rule="minlen:4" data-msg="Please enter at least 8 chars of subject" v-model="fields.subject">
                      <div class="validation text-danger" v-if="errors && errors.subject">{{errors.subject[0]}}</div>
                    </div>
                  </div>
                   <div class="col-md-12 mb-3">
                    <div class="form-group">
                      <textarea name="message" class="form-control" cols="45" rows="8" data-rule="required" data-msg="Please write something for us" placeholder="Message" v-model="fields.message"></textarea>
                      <div class="validation text-danger" v-if="errors && errors.message">{{errors.message[0]}}</div>
                    </div>
                  </div>
                  <div class="col-md-12">
                    <button type="submit" class="btn btn-a">Send Message</button>
                  </div>
                   </form>
                </div>
                     <div class="col-md-5 section-md-t3">
              <div class="icon-box section-b2">
                <div class="icon-box-icon">
                  <span class="ion-ios-paper-plane"></span>
                </div>
                <div class="icon-box-content table-cell">
                  <div class="icon-box-title">
                    <h4 class="icon-title">Say Hello</h4>
                  </div>
                  <div class="icon-box-content">
                    <p class="mb-1">Email.
                      <span class="color-a">contact@example.com</span>
                    </p>
                    <p class="mb-1">Phone.
                      <span class="color-a">+54 356 945234</span>
                    </p>
                  </div>
                </div>
              </div>
              <div class="icon-box section-b2">
                <div class="icon-box-icon">
                  <span class="ion-ios-pin"></span>
                </div>
                <div class="icon-box-content table-cell">
                  <div class="icon-box-title">
                    <h4 class="icon-title">Find us in</h4>
                  </div>
                  <div class="icon-box-content">
                    <p class="mb-1">
                      Manhattan, Nueva York 10036,
                      <br> EE. UU.
                    </p>
                  </div>
                </div>
              </div>
              <div class="icon-box">
                <div class="icon-box-icon">
                  <span class="ion-ios-redo"></span>
                </div>
                <div class="icon-box-content table-cell">
                  <div class="icon-box-title">
                    <h4 class="icon-title">Social networks</h4>
                  </div>
                  <div class="icon-box-content">
                    <div class="socials-footer">
                      <ul class="list-inline">
                        <li class="list-inline-item">
                          <a href="#" class="link-one">
                            <i class="fa fa-facebook" aria-hidden="true"></i>
                          </a>
                        </li>
                        <li class="list-inline-item">
                          <a href="#" class="link-one">
                            <i class="fa fa-twitter" aria-hidden="true"></i>
                          </a>
                        </li>
                        <li class="list-inline-item">
                          <a href="#" class="link-one">
                            <i class="fa fa-instagram" aria-hidden="true"></i>
                          </a>
                        </li>
                        <li class="list-inline-item">
                          <a href="#" class="link-one">
                            <i class="fa fa-pinterest-p" aria-hidden="true"></i>
                          </a>
                        </li>
                        <li class="list-inline-item">
                          <a href="#" class="link-one">
                            <i class="fa fa-dribbble" aria-hidden="true"></i>
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            </div>
          </div>
       
    </section>
    </section>
</template>

<script>
export default {
    name: 'google-map',
  props: ['name'],
  data: function () {
    return {
      mapName: this.name + "-map",
       fields: {},
      errors: {},
      success: false,
      loaded: true,

    }
  },
    mounted: function () {
    const element = document.getElementById(this.mapName)
    const options = {
      zoom: 14,
      center: new google.maps.LatLng(26.1429,91.7685)
    }
    const map = new google.maps.Map(element, options);
  },

  methods: {
      submit() {
          if(this.loaded) {
              this.loaded = false;
              this.success = false;
              this.errors ={};
              axios.post('/api/submit', this.fields).then(response => {
                  this.fields = {};
                  this.loaded = true;
                  this.success = true;                  
              }).catch(error => {
                  this.loaded = true;
                  if(error.response.status === 422) {
                      this.errors = error.response.data.error || {};
                  }
              });
          }
      },
  },
}
</script>

<style>
.google-map {
  width: 1100px;
  height: 600px;
  margin: 0 auto;
  background: gray;
}
</style>
