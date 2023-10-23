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
      <form id="contact-form" action="https://docs.google.com/forms/u/0/d/e/1FAIpQLSfq2XMc6Ub6UYYKXdKotjPpTbc_O6mxyW9XFTBLRxoFA482rg/formResponse" class="form">
        <div class="form__row">
          <label for="name" class="form__label">
              <span>お名前</span>
              <span class="form__required">必須</span>
            </label>
            <input type="text" name="entry.2005620554" id="name" class="form__textbox" required>
        </div>
        <div class="form__row">
          <label for="company" class="form__label">
              <span>会社名</span>
          </label>
          <input type="text" name="entry.1931415633" id="company" class="form__textbox">
        </div>
        <div class="form__row">
          <label for="email" class="form__label">
              <span>メールアドレス</span>
              <span class="form__required">必須</span>
            </label>
            <input type="email" name="entry.340382717" id="email" class="form__textbox" required>
        </div>
        <div class="form__row">
          <label for="message" class="form__label">
              <span>お問合せ内容</span>
              <span class="form__required">必須</span>
            </label>
            <textarea class="form__textarea" name="entry.839337160" id="message" required></textarea>
        </div>
        <!-- <div class="form__privacy-check">
          <label>
              <input type="checkbox" name="privacy-check" value="">
              <span class="form__check-label"><NuxtLink to="/privacypolicy" target="_blank">プライバシーポリシー</NuxtLink>に同意する</span>
          </label>
        </div> -->
        <div id="js-alert" class="form__alert"></div>
        <div class="form__submit">
          <button type="submit">メッセージを送信する</button>
        </div>
      </form>
  </div>
</div>
</template>

<style lang="scss" scoped>

.lead {
  margin-top: 40px;
  @media #{$lg} {
    margin-top: 80px;
    text-align: center;
  }
}

.form {
  margin-top: 40px;
  max-width: 800px;
  @media #{$lg} {
    margin: 80px auto 0;
  }
}

.form__row {
  margin-bottom: 24px;
  @media #{$lg} {
    display: flex;
    align-items: center;
    margin-bottom: 32px;
  }
}

  .form__label {
    display: block;
    font-weight: 500;
    margin-bottom: 10px;
    @media #{$lg} {
      flex: 0 0 30%;
    }
  }

  .form__required {
		display: inline-block;
		margin-left: 8px;
		color: $accent_color;
		border: 1px solid;
		padding: 4px 8px;
		border-radius: 5px;
		font-size: rem(12);
		line-height: 1;
	}

  .form__textbox, 
  .form__textarea {
    display: block;
    width: 100%;
		padding: 8px;
		border-radius: 5px;
		border: solid 1px $border_color;
    @media #{$lg} {
      flex: 1 1 70%;
    }
	}

	.form__textarea {
		height: 200px;
	}

	.form__privacy-check {
		text-align: center;
		margin-bottom: 32px;
		a {
			text-decoration: underline;
			
		}
	}
	.form__submit {
		margin-top: 20px;
		text-align: center;
	}
	.form__alert {
		color: $accent_color;
		font-size: 1.4rem;
		letter-spacing: 0.025em;
		text-align: center;
		margin-top: 8px;
	}

  input[type="checkbox"] {
	display: none;
	+ .form__check-label {
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
		+ .form__check-label {
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

.form__submit {
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