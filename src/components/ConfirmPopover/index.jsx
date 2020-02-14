import React from 'react';
import { Icon } from 'react-icons-kit';
import { warning } from 'react-icons-kit/entypo';
import { ic_close } from 'react-icons-kit/md';
import styles from './styles.module.scss';

const ConfirmPopover = (props) => {

  // const [open, setOpen] = useState(props.open);

  // const closePopover = () => {
  //   setOpen(false);
  // };

  // useEffect(() => {
  //   setOpen(props.open);
  // }, [props.open]);

  const {
    open,
    closePopover,
  } = props;

  return (
    <div
      className={styles.container}
      style={{
        display: open ? 'flex' : 'none',
      }}
    >

      <div className={styles.popover}>
        <div className={styles.popoverHeader}>
          <div className={styles.popoverHeaderConfirm}>
            <Icon icon={warning} className={styles.popoverHeaderConfirmIcon} />
            <span className={styles.popoverHeaderConfirmText}>Confirm</span>
          </div>
          <button
            onClick={closePopover}
            className={styles.popoverHeaderClose}
          >
            <Icon icon={ic_close} size={20} />
          </button>
        </div>

        <div className={styles.popoverBody}>
          Just some random content.
        </div>
      </div>

    </div>
  );
};

export default ConfirmPopover;