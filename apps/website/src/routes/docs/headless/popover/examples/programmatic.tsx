import { component$ } from '@builder.io/qwik';
import { Popover, usePopover } from '@qwik-ui/headless';
export default component$(() => {
  const { togglePopover } = usePopover(`programmatic-id`);
  return (
    <>
      <button
        class="popover-invoker"
        preventdefault:click
        onKeyDown$={async (e) => {
          if (e.key === 'o') {
            await togglePopover();
          }
        }}
      >
        Focus me and press the 'o' key!
      </button>
      <Popover id="programmatic-id" class="popover">
        I was programmatically opened!
      </Popover>
    </>
  );
});
