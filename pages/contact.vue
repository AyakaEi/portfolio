<template>
  <div class="l-page">
      <div class="l-container">
        <div class="c-title">
        <h1>
          Contact
          <span>お問い合わせ</span>
        </h1>
      </div>
      <p class="lead">
        お仕事のご依頼・ご相談などお気軽にお問い合わせください
      </p>
      <form id="contact" name="contact" method="POST" data-netlify="true" class="contact">
        <div class="contact__row">
          <label for="name" class="contact__label">
              <span>お名前</span>
              <span class="contact__required">必須</span>
            </label>
            <input type="text" name="name" id="name" autocomplete="name" class="contact__textbox" required>
        </div>
        <div class="contact__row">
          <label for="company" class="contact__label">
              <span>会社名</span>
          </label>
          <input type="text" name="company" id="company" autocomplete="organization" class="contact__textbox">
        </div>
        <div class="contact__row">
          <label for="email" class="contact__label">
              <span>メールアドレス</span>
              <span class="contact__required">必須</span>
            </label>
            <input type="email" name="email" id="email" autocomplete="email" class="contact__textbox" required>
        </div>
        <div class="contact__row">
          <label for="message" class="contact__label">
              <span>お問合せ内容</span>
              <span class="contact__required">必須</span>
            </label>
            <textarea class="contact__textarea" name="message" id="message" required></textarea>
        </div>
        <!-- <div class="contact__privacy-check">
          <label>
              <input type="checkbox" name="privacy-check" value="">
              <span class="contact__check-label"><NuxtLink to="/privacypolicy" target="_blank">プライバシーポリシー</NuxtLink>に同意する</span>
          </label>
        </div> -->
        <div id="js-alert" class="contact__alert"></div>
        <div class="contact__submit">
          <button type="submit">メッセージを送信する</button>
        </div>
      </form>
  </div>
</div>
</template>

<script>
export default {
  data () {
    return {
    }
  }
}
</script>

<style lang="scss" scoped>
.lead {
  margin-top: 40px;
  @media #{$lg} {
    margin-top: 80px;
    text-align: center;
  }
}

.contact {
  margin-top: 40px;
  max-width: 800px;
  @media #{$lg} {
    margin: 80px auto 0;
  }
}

.contact__row {
  margin-bottom: 24px;
  @media #{$lg} {
    display: flex;
    align-items: center;
    margin-bottom: 32px;
  }
}

  .contact__label {
    display: block;
    font-weight: 500;
    margin-bottom: 10px;
    @media #{$lg} {
      flex: 0 0 30%;
    }
  }

  .contact__required {
		display: inline-block;
		margin-left: 8px;
		color: $accent_color;
		border: 1px solid;
		padding: 4px 8px;
		border-radius: 5px;
		font-size: rem(12);
		line-height: 1;
	}

  .contact__textbox, 
  .contact__textarea {
    display: block;
    width: 100%;
		padding: 8px;
		border-radius: 5px;
		border: solid 1px $border_color;
    @media #{$lg} {
      flex: 1 1 70%;
    }
	}

	.contact__textarea {
		height: 200px;
	}

	.contact__privacy-check {
		text-align: center;
		margin-bottom: 32px;
		a {
			text-decoration: underline;
			
		}
	}
	.contact__submit {
		margin-top: 20px;
		text-align: center;
	}
	.contact__alert {
		color: $accent_color;
		font-size: 1.4rem;
		letter-spacing: 0.025em;
		text-align: center;
		margin-top: 8px;
	}

  input[type="checkbox"] {
	display: none;
	+ .contact__check-label {
		padding-left: 25px;
		position: relative;
		&:before {
			content: "";
			display: block;
			position: absolute;
			top: 3px;
			left: 0;
			width: 16px;
			height: 16px;
			border: 1px solid $border_color;
			border-radius: 4px;
			background: #fff;
		}
	}
	&:checked {
		+ .contact__check-label {
			&:after {
				content: "";
				display: block;
				position: absolute;
				top: 4px;
				left: 5px;
				width: 5px;
				height: 9px;
				transform: rotate(40deg);
				border-bottom: 2px solid $accent_color;
				border-right: 2px solid $accent_color;
			}
		}
	}
}

.contact__submit {
  margin-top: 60px;
  text-align: center;
    button {
    display: inline-block;
    border: 1px solid;
    color: $accent_color;
    padding: 14px 40px;
    border-radius: 5px;
  }
}


</style>