<script setup>
import HomeLayout from "@/Layouts/HomeLayout.vue";
import NavbarUser from "@/Components/NavbarUser.vue";
import { Head } from "@inertiajs/inertia-vue3";
</script>

<template>
  <HomeLayout>
    <Head title="About" />
    <div class="bg-sky-900">
      <div class="max-w-xs mx-auto overflow-hidden md:max-w-5xl lg:max-w-7xl">
        <div
          class="container mx-auto my-auto py-8 md:py-12 pb-12 sm:flex sm:flex-wrap sm:gap-6 sm:justify-center"
        >
          <div
            class="flex align-items: center p-4 lg:mx-0 rounded-2xl shadow-lg overflow-hidden mb-10 bg-white sm:mb-0 sm:w-full md:w-1/4 lg:w-1/4 xl:w-1/4"
          >
            <div class="overflow-hidden sm:mb-0 sm:w-64 lg:w-72 xl:w-96">
              <div
                class="text-center text-xs font-normal md:mt-24 lg:mt-20 xl:mt-7 text-white rounded-3xl w-auto"
              >
                <img src="Logo-ENT-Gelap.svg" class="" alt="" />
              </div>
            </div>
          </div>

          <div
            class="text-center p-4 rounded-2xl shadow-lg overflow-hidden mb-10 bg-white sm:mb-0 sm:w-full md:w-2/4 lg:w-2/4 xl:w-2/4 lg:w-2/4"
          >
            <div
              class="text-xs md:text-sm lg:text-base xl:text-base font-extrabold mt-4 text-black py-1 px-2 rounded-3xl w-auto flex-none"
            >
              MEDIA ENT
            </div>

            <div
              class="text-left inline-block text-xs md:text-sm lg:text-base xl:text-base font-normal mt-4 text-black py-1 px-2 rounded-3xl w-auto flex-none"
            >
              Setiap tahun ENT melakukan evaluasi dan update terhadap website,
              fitur maupun artikel yang ditampilkan melalui suatu website portal
              berita, yakni Media ENT. Hadir untuk berbagi pengetahuan dan
              informasi terkini, Media ENT mengusung empat kategori konten yaitu
              Lifestyle, Hiburan, Teknologi, dan Explore.
            </div>
            <div
              class="text-left inline-block text-xs md:text-sm lg:text-base xl:text-base font-normal mt-4 text-black py-1 px-2 rounded-3xl w-auto flex-none"
            >
              Pada tahun 2023, Media ENT dikelola oleh generasi ke-17 ENT. Gen
              17 Crews menghadirkan website portal berita bertema minimalis,
              artikel yang up to date, dan dilengkapi dengan fitur forum.
            </div>
          </div>
        </div>

        <div class="container w-full md:pt-12 sm:justify-center">
          <div
            class="text-center text-xs font-normal text-white py-1 w- md:w-4/5 mx-auto flex-none"
          >
            <img src="FK.jpg" class="rounded-2xl" alt="" />
          </div>
        </div>

        <br />
        <br />

        <div
          class="p-4 text-white text-center overflow-hidden mb-10 sm:mb-0 md:w-3/4 md:m-auto"
        >
          <div class="text-black font-medium">
            <p class="rounded-2xl bg-white lg:w-1/3 w-3/5 m-auto">Reporter</p>
          </div>
          <br />
          <p>
            Reporter bertanggung jawab atas penulisan artikel dan pembuatan
            konten yang ada pada Media ENT. Anggota divisi Reporter yaitu Arman,
            Erina, Harun, dan Maya.
          </p>
        </div>

        <div
          class="container mx-auto my-auto py-8 md:py-12 px-6 pb-12 sm:flex sm:flex-wrap sm:gap-6 sm:justify-center"
        >
          <div
            class="p-4 overflow-hidden mb-10 sm:mb-0 sm:w-64 md:w-80 lg:w-72 xl:w-96"
          >
            <div
              class="text-center text-xs font-normal mt-4 text-white py-1 px-2 rounded-3xl w-auto flex-none"
            >
              <img src="ARMAN.png" class="" alt="" />
            </div>
          </div>

          <div
            class="p-4 overflow-hidden mb-10 sm:mb-0 sm:w-64 md:w-80 lg:w-72 xl:w-96"
          >
            <div
              class="text-center text-xs font-normal mt-4 text-white py-1 px-2 rounded-3xl w-auto flex-none"
            >
              <img src="ERINAq.png" class="" alt="" />
            </div>
          </div>
          <div
            class="p-4 overflow-hidden mb-10 sm:mb-0 sm:w-64 md:w-80 lg:w-72 xl:w-96"
          >
            <div
              class="text-center text-xs font-normal mt-4 text-white py-1 px-2 rounded-3xl w-auto flex-none"
            >
              <img src="HARUNn.png" class="" alt="" />
            </div>
          </div>

          <div
            class="p-4 overflow-hidden mb-10 sm:mb-0 sm:w-64 md:w-80 lg:w-72 xl:w-96"
          >
            <div
              class="text-center text-xs font-normal mt-4 text-white py-1 px-2 rounded-3xl w-auto flex-none"
            >
              <img src="MAYA.png" class="" alt="" />
            </div>
          </div>
        </div>

        <div
          class="p-4 text-white text-center overflow-hidden mb-10 sm:mb-0 md:w-3/4 md:m-auto"
        >
          <div class="text-black font-medium">
            <p class="rounded-2xl bg-white lg:w-1/3 w-3/5 m-auto">
              Photographer
            </p>
          </div>
          <br />
          <p>
            Photographer bertanggung jawab atas dokumentasi foto dan tampilan
            gambar pada setiap artikel di Media ENT. Anggota divisi Photographer
            terdiri dari Ashiliya, Ikhsan, dan Soleh.
          </p>
        </div>

        <div
          class="container mx-auto my-auto py-8 md:py-12 px-6 pb-12 sm:flex sm:flex-wrap sm:gap-6 sm:justify-center"
        >
          <div
            class="p-4 overflow-hidden mb-10 sm:mb-0 sm:w-64 md:w-80 lg:w-72 xl:w-96"
          >
            <div
              class="text-center text-xs font-normal mt-4 text-white py-1 px-2 rounded-3xl w-auto flex-none"
            >
              <img src="ASHILLs.png" class="" alt="" />
            </div>
          </div>

          <div
            class="p-4 overflow-hidden mb-10 sm:mb-0 sm:w-64 md:w-80 lg:w-72 xl:w-96"
          >
            <div
              class="text-center text-xs font-normal mt-4 text-white py-1 px-2 rounded-3xl w-auto flex-none"
            >
              <img src="IKHSANq.png" class="" alt="" />
            </div>
          </div>

          <div
            class="p-4 overflow-hidden mb-10 sm:mb-0 sm:w-64 md:w-80 lg:w-72 xl:w-96"
          >
            <div
              class="text-center text-xs font-normal mt-4 text-white py-1 px-2 rounded-3xl w-auto flex-none"
            >
              <img src="SOLEHq.png" class="" alt="" />
            </div>
          </div>
        </div>

        <div
          class="p-4 text-white text-center overflow-hidden mb-10 sm:mb-0 md:w-3/4 md:m-auto"
        >
          <div class="text-black font-medium">
            <p class="rounded-2xl bg-white lg:w-1/3 w-3/5 m-auto">
              Videographer
            </p>
          </div>
          <br />
          <p>
            Videographer bertugas dalam pengambilan video, video editing, dan
            audio editing untuk kategori video yang terdapat pada website Media
            ENT. Anggota divisi Videografer yakni Alvira, Angger, Elham, dan
            Fuad.
          </p>
        </div>

        <div
          class="container mx-auto my-auto py-8 md:py-12 px-6 pb-12 sm:flex sm:flex-wrap sm:gap-6 sm:justify-center"
        >
          <div
            class="p-4 overflow-hidden mb-10 sm:mb-0 sm:w-64 md:w-80 lg:w-72 xl:w-96"
          >
            <div
              class="text-center text-xs font-normal mt-4 text-white py-1 px-2 rounded-3xl w-auto flex-none"
            >
              <img src="ALVIRA.png" class="" alt="" />
            </div>
          </div>

          <div
            class="p-4 overflow-hidden mb-10 sm:mb-0 sm:w-64 md:w-80 lg:w-72 xl:w-96"
          >
            <div
              class="text-center text-xs font-normal mt-4 text-white py-1 px-2 rounded-3xl w-auto flex-none"
            >
              <img src="ANGGERq.png" class="" alt="" />
            </div>
          </div>

          <div
            class="p-4 overflow-hidden mb-10 sm:mb-0 sm:w-64 md:w-80 lg:w-72 xl:w-96"
          >
            <div
              class="text-center text-xs font-normal mt-4 text-white py-1 px-2 rounded-3xl w-auto flex-none"
            >
              <img src="ELHAMq.png" class="" alt="" />
            </div>
          </div>

          <div
            class="p-4 overflow-hidden mb-10 sm:mb-0 sm:w-64 md:w-80 lg:w-72 xl:w-96"
          >
            <div
              class="text-center text-xs font-normal mt-4 text-white py-1 px-2 rounded-3xl w-auto flex-none"
            >
              <img src="FUAD.png" class="" alt="" />
            </div>
          </div>
        </div>

        <div
          class="p-4 text-white text-center overflow-hidden mb-10 sm:mb-0 md:w-3/4 md:m-auto"
        >
          <div class="text-black font-medium">
            <p class="rounded-2xl bg-white lg:w-1/3 w-3/5 m-auto">
              Graphic Designer
            </p>
          </div>
          <br />
          <p>
            Graphic Designer bertugas untuk membuat ilustrasi pada website Media
            ENT dengan menggabungkan ide kreatif dan konten edukatif. Anggota
            divisi Graphic Designer adalah Afsun dan Shabrina.
          </p>
        </div>

        <div
          class="container mx-auto my-auto py-8 md:py-12 px-6 pb-12 sm:flex sm:flex-wrap sm:gap-6 sm:justify-center"
        >
          <div
            class="p-4 overflow-hidden mb-10 sm:mb-0 sm:w-64 md:w-80 lg:w-72 xl:w-96"
          >
            <div
              class="text-center text-xs font-normal mt-4 text-white py-1 px-2 rounded-3xl w-auto flex-none"
            >
              <img src="AFSUNq.png" class="" alt="" />
            </div>
          </div>

          <div
            class="p-4 overflow-hidden mb-10 sm:mb-0 sm:w-64 md:w-80 lg:w-72 xl:w-96"
          >
            <div
              class="text-center text-xs font-normal mt-4 text-white py-1 px-2 rounded-3xl w-auto flex-none"
            >
              <img src="SHABRINAq.png" class="" alt="" />
            </div>
          </div>
        </div>

        <div
          class="p-4 text-white text-center overflow-hidden mb-10 sm:mb-0 md:w-3/4 md:m-auto"
        >
          <div class="text-black font-medium">
            <p class="rounded-2xl bg-white lg:w-1/3 w-3/5 m-auto">Webmaster</p>
          </div>
          <br />
          <p>
            Webmaster memiliki peran dalam membangun dan mengelola website pada
            Media ENT. Anggota divisi Webmaster yaitu Alfian, Krisna, Syahrul
            dan Yudha.
          </p>
        </div>

        <div
          class="container mx-auto my-auto py-8 md:py-12 px-6 pb-12 sm:flex sm:flex-wrap sm:gap-6 sm:justify-center"
        >
          <!-- <div class="p-4 overflow-hidden mb-10 sm:mb-0 sm:w-64 md:w-80 lg:w-72 xl:w-96">
              <div
                class="text-center text-xs font-normal mt-4 text-white py-1 px-2 rounded-3xl w-auto flex-none"
              >
              <img src="" class="" alt="ABID" />
              </div>
            </div> -->

          <div
            class="p-4 overflow-hidden mb-10 sm:mb-0 sm:w-64 md:w-80 lg:w-72 xl:w-96"
          >
            <div
              class="text-center text-xs font-normal mt-4 text-white py-1 px-2 rounded-3xl w-auto flex-none"
            >
              <img src="ALFIANq.png" class="" alt="" />
            </div>
          </div>

          <!-- <div class="p-4 overflow-hidden mb-10 sm:mb-0 sm:w-64 md:w-80 lg:w-72 xl:w-96">
              <div
                class="text-center text-xs font-normal mt-4 text-white py-1 px-2 rounded-3xl w-auto flex-none"
              >
              <img src="" class="" alt="Krina Wahyu" />
              </div>
            </div> -->

          <div
            class="p-4 overflow-hidden mb-10 sm:mb-0 sm:w-64 md:w-80 lg:w-72 xl:w-96"
          >
            <div
              class="text-center text-xs font-normal mt-4 text-white py-1 px-2 rounded-3xl w-auto flex-none"
            >
              <img src="YUDHA.png" class="" alt="" />
            </div>
          </div>

          <div
            class="p-4 overflow-hidden mb-10 sm:mb-0 sm:w-64 md:w-80 lg:w-72 xl:w-96"
          >
            <div
              class="text-center text-xs font-normal mt-4 text-white py-1 px-2 rounded-3xl w-auto flex-none"
            >
              <img src="SYAHRUL.png" class="" alt="" />
            </div>
          </div>
        </div>

        <br />
      </div>
    </div>
  </HomeLayout>
</template>



<style>
</style>
