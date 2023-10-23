<template>
  <div>
    <section class="mv">
      <h1 class="mv__copy">
        フリーランスのマークアップエンジニアです。<br>
        Webサイトのコーディングを承ります。
      </h1>
      <p class="mv__logo"><img src="~/assets/img/logo.svg" alt="Eee.web(イードットウェブ)"></p>
    </section>

    <div class="l-container">
      <section id="profile" class="profile">
        <h2 class="c-heading-section profile__heading">
          Profile
          <span>プロフィール</span>
        </h2>
        <div class="profile__img"><img src="~/assets/img/profile_img.jpg" alt="エイアヤカ写真"></div>
        <div class="profile__text-wrapper">
          <p class="profile__name">エイ アヤカ<span class="profile__position">/ マークアップエンジニア</span></p>

          <div class="profile__desc">
            <p>1989年生まれ。神奈川県在住。大学を卒業後、メーカーで生産管理と事務を経験。Excel VBAでプログラミングに出会ったことをきっかけにIT業界に転職。 システムエンジニアやWeb制作会社勤務を経験後、2018年10月に独立。</p>
            <p>現在はフリーランスのマークアップエンジニアとして活動中。</p>
          </div>
          <div class="profile__info">
            <dl>
              <dt>屋号</dt>
              <dd>Eee.web （イードットウェブ）</dd>
            </dl>
            <dl>
              <dt>事業形態</dt>
              <dd>個人事業</dd>
            </dl>
            <dl>
              <dt>住所</dt>
              <dd>神奈川県横浜市</dd>
            </dl>
          </div>
        </div>
      </section>

      <section id="service" class="service">
        <h2 class="c-heading-section">
          Service
          <span>できること</span>
        </h2>

        <ul class="service__list">
          <li class="service__item">
            <h3 class="service__title">HTMLコーディング</h3>
            <p class="service__desc">LPや小規模なWebサイトなど、静的なページのHTMLコーディングに対応いたします。</p>
          </li>
          <li class="service__item">
            <h3 class="service__title">WordPressサイト制作</h3>
            <p class="service__desc">コーディングからWordPress化までや、既存テーマのカスタマイズなど柔軟に対応いたします。</p>
          </li>
        </ul>
      </section>
    </div>

      <section id="works" class="works">
        <div class="l-container">
        <h2 class="c-heading-section">
          Works
          <span>制作実績</span>
        </h2>
        <ul class="works__list">
          <li v-for="blog in data?.contents" :key="blog.id" class="works__item">
            <NuxtLink
              :to="`/${blog.id}`"
              class="works__link"
            >
              <div class="works__thumbnail">
                <img
                  :src="blog.eyecatch?.url"
                  :width="blog.eyecatch?.width"
                  :height="blog.eyecatch?.height"
                  class=""
                  alt=""
                />
              </div>
              <div class="works__text-wrapper">
                <p class="works__title"> {{ blog.title }}</p>
                <span class="works__category">{{ blog.category?.name }}</span>
              </div>
            </NuxtLink>
          </li>
        </ul>
        <p class="works__annotation">
          下請けのお仕事がメインでWeb上では非公開の実績が多いため、こちらに詳細を掲載していない案件については別資料としてポートフォリオを用意しております。<br>
          また、スキルシートもございますので確認したい場合はお問い合わせください。
        </p>
      </div>
    </section>

    <section id="contact" class="contact">
      <div class="contact__wrapper">
        <h2 class="c-heading-section">
          Contact
          <span>お問い合わせ</span>
        </h2>
        <p class="contact__text">
          お仕事のご依頼・ご相談など<br>
          お気軽にお問い合わせくださいませ。
        </p>
        <NuxtLink to="/contact" class="c-link">お問い合わせフォーム</NuxtLink>
      </div>
    </section>


  </div>

</template>


<script setup lang="ts">
import { Blog } from "~~/types/Blog";

const { data } = await useMicroCMSGetList<Blog>({
  endpoint: "works",
});


</script>

<style lang="scss" scoped>
  .mv {
    display: flex;
    flex-direction: column-reverse;
    justify-content: center;
    align-items: center;
    background-color: $main_color;
    margin: 60px 16px 0;
    height: 400px;
    @media #{$lg} {
      margin: 50px 60px 0;
    height: 700px;
    }
  }
  .mv__logo {
    width:120px;
    @media #{$lg} {
      width: 230px;
    }
  }
  .mv__copy {
    text-align: center;
    font-family: $font_accent;
    font-size: rem(14);
    line-height: 2;
    font-weight: 500;
    margin-top: 40px;
    @media #{$lg} {
      font-size: rem(20);
      margin-top: 60px;
    }
  }

  .profile {
    position: relative;
    padding-top: 265px;
    .c-heading-section {
      position: absolute;
      top: 238px;
      right: 0;
      @media #{$lg} {
        top: 226px;
      }
    }
  }

  .profile__position {
    @include textSmall;
    margin-left: 10px;
  }

  .profile__img {
    position: absolute;
    top: 120px;
    left: 0;
    width: 200px;
    height: 200px;
    @media #{$lg} {
      width: 400px;
    height: 400px;
    }
  }

  .profile__text-wrapper {
    position: relative;
    width: 90%;
    margin-left: auto;
    padding: 80px 0 40px 32px;
    @media #{$lg} {
      width: 75%;
      padding: 70px 60px 70px 200px;
    }
    &::before {
      content: '';
      position: absolute;
        top: 0;
        left: 0;
        width: calc(100% + 24px);
        height: 100%;
        background-color: $main_color;
        z-index: -1;
        @media #{$lg} {
          width: calc(85% + ( 50vw - 50%));
        }
    }
  }

  .profile__name {
    @include headingSmall;
  }

  .profile__desc {
    @include textMedium;
    margin-top: 30px;
  }

  .profile__info {
    margin-top: 40px;
    @include textSmall;
    dl {
      display: table-row;
    }
    dt,dd {
      display: table-cell;
    }
    dt {
      width: 30%;
    }
    dd {
      width: 70%;
      &::before {
        content: '：';
      }
    }
  }

  .service {
    padding-top: 100px;
    @media #{$lg} {
      padding-top: 200px;
    }
    .c-heading-section {
      display: inline-block;
      padding-bottom: 34px;
      &::before {
        content: '';
        position: absolute;
        bottom: 20px;
        right: -60px;
        width: calc(100% + ( 50vw - 50%) + 60px);
        height: calc(100% - 48px);
        background-color: $main_color;
        z-index: -1;
        @media #{$lg} {
          bottom: 10px;
        }
      }
    }
  }

  .service__list {
    display: grid;
    @media #{$lg} {
      margin-top: 40px;
      grid-template-columns:repeat(2, 1fr);
    }
  }

  .service__item {
    padding: 32px 10px;
    @media #{$lg} {
      padding: 40px 84px;
    }
    & + & {
      border-top: 1px solid $border_color;
      @media #{$lg} {
        border-top: none;
        border-left: 1px solid $border_color;
      }
    }
  }

  .service__title {
    @include headingSmall;
  }

  .service__desc {
    @include textMedium;
    margin-top: 16px;
  }

  .works {
    position: relative;
    margin-top: 80px;
    background-color: $main_color;
    padding: 80px 0;
    @media #{$lg} {
      padding: 150px 0;
      margin-top: 250px;
    }
    .c-heading-section {
      position: absolute;
      top: -104px;
      left: 24px;
      @media #{$lg} {
        top: -180px;
      }
    }
  }

  .works__list {
    display: grid;
    grid-template-columns:repeat(2, 1fr);
    gap: 20px;
    @media #{$lg} {
      grid-template-columns:repeat(3, 1fr);
      gap: 60px;
    }
  }
  .works__thumbnail {
    overflow: hidden;
  }

  .works__text-wrapper {
    margin-top: 10px;
  }

  .works__category {
    display: inline-block;
    color: $gray_color;
    font-size: rem(12);
    padding: 4px;
  }

  .works__title {
    font-weight: 500;
  }

  .works__annotation {
    margin-top: 60px;
    @include textMedium;
    @media #{$lg} {
      margin-top: 80px;
    }
  }

  .contact {
    padding: 80px 24px;
    background-color: $main_color;
    text-align: center;
    @media #{$lg} {
      padding: 120px;
    }
  }

  .contact__wrapper {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    background-color: #fff;
    width: 100%;
    max-width: 530px;
    margin: 0 auto;
    border-radius: 50%;
    aspect-ratio: 1;
    @media #{$lg} {
    }
  }

  .contact__text {
    margin: 30px 0 40px;
    font-family: $font_accent;
    font-size: rem(16);
    font-weight: 600;
    line-height: 2;
    @media #{$lg} {
      margin: 50px 0 60px;
      font-size: rem(18);
    }
  }
</style>