// Utils
import { copyTextToClipboard } from '@/utils/clipboard';

// Notifications
import { notify } from '@/notifications/notify';

// Constants
import { SHARE_DATA } from '@/constants/share';

export async function shareController() {
  if ('share' in navigator) {
    try {
      await navigator.share(SHARE_DATA);
    } catch (error) {
      console.error(error);
    }

    return;
  }

  try {
    await copyTextToClipboard(location.href);

    notify({
      text: 'URL copied to clipboard',
      type: 'success',
    });
  } catch (error) {
    console.error(error);

    notify({
      text: 'Oops! A problem occurred while trying to copy the URL to the clipboard. Please try again later.',
      type: 'error',
    });
  }
}
