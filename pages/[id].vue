  <template v-if="data">
    <div class="l-page">
        <div class="l-container">
          <div class="c-title">
          <h1>
            Works
            <span>制作実績</span>
          </h1>
        </div>

      </div>
      <div class="l-container l-container--narrow works-wrapper">
        <header class="works-header">
          <h1 class="title">
        {{ data.title }}
      </h1>
      <p class="category">
        {{ data.category?.name }}
      </p>
      <figure class="thumbnail">
          <img
          :src="data.eyecatch?.url"
          :width="data.eyecatch?.width"
          :height="data.eyecatch?.height"
          alt=""
        />
      </figure>
        </header>


      <div v-html="data.content" class="l-contents"></div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { Blog } from "~~/types/blog";

const { params } = useRoute();

const { data } = await useMicroCMSGetListDetail<Blog>({
  endpoint: "works",
  contentId: Array.isArray(params.id) ? params.id[0] : params.id,
});
</script>

<style lang="scss" scoped>

.works-wrapper {
  margin-top: 32px;
  @media #{$lg} {
    margin-top: 60px;
  }
}
.title {
  font-size: rem(18);
  font-weight: 700;
  font-family: $font_accent;
    @media #{$lg} {
      font-size: rem(32);
      margin-top: 32px;
    }
  }

  .thumbnail {
    margin-top: 24px;
    box-shadow: 0 0 10px rgba($color: #000000, $alpha: .1);
    @media #{$lg} {
      margin-top: 48px;
    }
  }

  .category {
    display: inline-block;
    color: $gray_color;
    border: 1px solid;
    padding: 4px 8px;
    margin-top: 8px;
    line-height: 1;
    font-size: rem(12);
    @media #{$lg} {
      font-size: rem(13);
    }
  }
</style>