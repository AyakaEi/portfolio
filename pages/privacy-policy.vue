<template>
  <div class="l-page">
      <div class="l-container">
        <div class="c-title">
        <h1>
          Privacy Policy
          <span>プライバシーポリシー</span>
        </h1>
      </div>
    </div>
    <div class="l-container l-container--narrow">
			<div class="privacypolicy">
        <p class="privacypolicy__text">
          Eee.web（以下、当サイト）は、個人情報の保護、適正な管理が重要な社会的責務であることを認識し、以下のとおり個人情報保護方針を定め、これを実行、維持してまいります。</p>
        <h3 class="privacypolicy__heading">基本方針</h3>
        <p class="privacypolicy__text">当サイトは、個人情報の保護に関する法令と社会秩序を尊重・遵守し、個人情報の適正な取扱と保護に努めます。</p>
        <h3 class="privacypolicy__heading">個人情報の取得、利用、提供</h3>
        <p class="privacypolicy__text">
          個人情報の取得は、適正な手段によって行うとともに、利用目的の公表、通知、明示等をさせていただき、ご本人の同意なく、利用目的の範囲を超えた個人情報の取扱はいたしません。<br>
          また、個人情報を第三者へ提供・開示等する場合は、法令の定める手続きに則って行います。</p>
        <h3 class="privacypolicy__heading">個人情報の利用目的</h3>
        <p class="privacypolicy__text">当サイトが、取得する個人情報の利用目的は、以下のとおりです。</p>
        <ol class="privacypolicy__list">
          <li>当サイトのお問合せに対するご回答</li>
          <li>当サイトが行うサービスの提供・運営</li>
          <li>上記1～2の利用目的の達成に必要な範囲での、個人情報の第三者への提供。</li>
        </ol>
        <h3 class="privacypolicy__heading">個人情報の第三者への提供</h3>
        <p class="privacypolicy__text">当サイトが保有する個人情報は、以下の場合に、第三者に提供されます。</p>
        <ol class="privacypolicy__list">
          <li>ご本人の同意がある場合。</li>
          <li>法令の規定に基づく場合。</li>
          <li>人の生命、身体又は財産の保護のため必要がある場合であって、ご本人の同意を得ることが困難であるとき。</li>
          <li>国の機関若しくは地方公共団体又はその委託を受けた者が法令の定める事務を遂行することに対し協力する必要がある場合であって、ご本人の同意を得ることにより当該事務の遂行に支障を及ぼすおそれがあるとき。</li>
        </ol>
        <h3 class="privacypolicy__heading">個人情報の安全管理措置</h3>
        <p class="privacypolicy__text">当サイトが保有する個人情報は適正かつ慎重に管理し、個人情報への不正アクセス、紛失、改ざん、漏洩等を防止するため、必要かつ適切な安全管理措置を講じます。</p>
        <h3 class="privacypolicy__heading">個人情報の取扱の委託</h3>
        <p class="privacypolicy__text">
          当サイトが保有する個人情報について、その取扱を外部に委託する場合があります。その場合は、個人情報の保護に十分な措置を講じている者を選定し、委託先に対し、必要かつ適切な監督を行います。</p>
        <h3 class="privacypolicy__heading">個人情報の開示・訂正等の手続き</h3>
        <p class="privacypolicy__text">当サイトが保有する個人情報の開示、訂正、利用停止等に関する、ご本人からの要請については、当サイトが別途定める手続きによって、遅滞なく対応させていただきます。
        </p>
        <h3 class="privacypolicy__heading">アクセス解析ツールについて</h3>
        <p class="privacypolicy__text">
          当サイトでは、Googleによるアクセス解析ツール「Googleアナリティクス」を利用しています。このGoogleアナリティクスはトラフィックデータの収集のためにCookieを使用しています。このトラフィックデータは匿名で収集されており、個人を特定するものではありません。この機能はCookieを無効にすることで収集を拒否することが出来ますので、お使いのブラウザの設定をご確認ください。
        </p>
        <h3 class="privacypolicy__heading">個人情報についてのお問合せ窓口</h3>
        <p class="privacypolicy__text">本方針および当サイトの個人情報の取扱に関するご意見、ご質問等は当サイトの<NuxtLink to="/contact">お問合せフォーム</NuxtLink>よりご連絡ください。</p>

			</div>
    </div>
	</div>
</template>

<style lang="scss" scoped>
.privacypolicy {
  margin-top: 40px;
	@include textMedium;
  @media #{$lg} {
    margin-top: 80px;
  }
}

.privacypolicy__heading {
	font-weight: 600;
	margin-top: 2em;
	font-size: 1.1em;
}

.privacypolicy__text {
	a {
		text-decoration: underline;
	}
}


</style>