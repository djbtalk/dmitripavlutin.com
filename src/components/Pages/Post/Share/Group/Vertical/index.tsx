import * as React from 'react';

import styles from './index.module.scss';

import ShareSocialFacebook from 'components/Pages/Post/Share/Social/Facebook';
import ShareSocialReddit from 'components/Pages/Post/Share/Social/Reddit';
import PostShareSocialTwitter from 'components/Pages/Post/Share/Social/Twitter';

interface ShareGroupVerticalProps {
  url: string;
  text: string;
  tags: Tags;
  show: boolean;
}

export default function ShareGroupVertical({ url, text, tags, show }: ShareGroupVerticalProps) {
  const shareProps = {
    url,
    text,
    tags,
  };
  return (
    <div className={`${styles.verticalGroup} ${show ? styles.show : ''}`}>
      <PostShareSocialTwitter {...shareProps} />
      <ShareSocialFacebook {...shareProps} />
      <ShareSocialReddit {...shareProps} />
    </div>
  );
}