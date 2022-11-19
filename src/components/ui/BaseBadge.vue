<template>
  <span class="badge" :class="['badge--' + mode, { nml: noMarginLeft }]">
    <slot></slot>
  </span>
</template>

<script>
export default {
  props: ['mode', 'noMarginLeft'],
};
</script>

<style scoped>
.badge {
  display: inline-block;
  padding: 0.15rem 1.25rem;
  background-color: #ccc;
  color: #292929;
  margin: 0 0.75rem;
  border-radius: 0.5rem;
}

.nml {
  margin-left: 0;
}

.badge--highlight {
  background-color: #1e847f;
  color: #fff;
}

.badge--elegant {
  background-color: #ecc19c;
  color: white;
}
</style>
