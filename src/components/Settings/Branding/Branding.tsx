import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAppSelector } from '../../hooks/hooks';
import uuid from 'react-uuid';

import BrandingItem from './BrandingItem/BrandingItem';
import BrandingTypefaceItem from './BrandingTypefaceItem/BrandingTypefaceItem';
import BrandingPaletteItem from './BrandingPaletteItem/BrandingPaletteItem';
import BrandingOrganizationTemplate from './BrandingOrganizationTemplate/BrandingOrganizationTemplate';
import Dropzone from '../../UI/Dropzone/Dropzone';
import Modal from '../../UI/Modal/Modal';

import classes from './Branding.module.css';
import classesModal from '../../UI/Modal/Modal.module.css';
import brandingTypefaceItemClasses from './BrandingTypefaceItem/BrandingTypefaceItem.module.css';

const Branding = () => {
  const [uploadModalIsOpen, setUploadModalIsOpen] = useState(false);
  const { palettes, usedTypefaces, logos } = useAppSelector((state) => state.settings);
  const navigate = useNavigate();

  const navigateHandler = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>, link: string) => {
    e.preventDefault();

    navigate(link);
  };

  const openModalHandler = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    e.preventDefault();

    setUploadModalIsOpen(true);
  };

  const closeModalHandler = () => {
    setUploadModalIsOpen(false);
  };

  return (
    <div>
      <h2>Organization Branding</h2>
      <BrandingItem
        title="Brand Logos"
        onClick={openModalHandler}
        classNameActionBox={logos !== null ? 'reduced' : ''}
        isVisibleActionBox={true}
        linkHref="#"
        linkText="Upload new logo"
      />
      <BrandingItem
        title="Colors"
        onClick={(e) => navigateHandler(e, '/settings/colors')}
        classNameActionBox={palettes.length > 0 ? 'reduced' : ''}
        isVisibleActionBox={true}
        linkHref="/settings/colors"
        linkText="Create New Palette">
        {palettes.length > 0 && (
          <ul className={classes['organization-list']}>
            {palettes.map((el) => {
              return (
                <li key={uuid()}>
                  <BrandingOrganizationTemplate title={el.name}>
                    <div className={classes.palettes}>
                      <BrandingPaletteItem color={el.colorPrimary.hex} title="Primary" />
                      <BrandingPaletteItem color={el.colorSecondary.hex} title="Secondary" />
                      <BrandingPaletteItem color={el.colorAccent.hex} title="Accent" />
                    </div>
                  </BrandingOrganizationTemplate>
                </li>
              );
            })}
          </ul>
        )}
      </BrandingItem>
      {usedTypefaces ? (
        <BrandingOrganizationTemplate title="Selected Typography">
          <a
            className={classes['link-coverage']}
            href="/settings/typography"
            onClick={(e) => navigateHandler(e, '/settings/typography')}
          />
          <BrandingTypefaceItem
            className={`${brandingTypefaceItemClasses.heading}`}
            title="Header"
            fontFamily={usedTypefaces.headerFont}
          />
          <BrandingTypefaceItem
            className={`${brandingTypefaceItemClasses.subheading}`}
            title="Subheading"
            fontFamily={usedTypefaces.subHeaderFont}
          />
          <BrandingTypefaceItem
            className={`${brandingTypefaceItemClasses['body-copy']}`}
            title="Body copy"
            fontFamily={usedTypefaces.bodyCopyFont}
          />
        </BrandingOrganizationTemplate>
      ) : (
        <BrandingItem
          title="Typography"
          onClick={(e) => navigateHandler(e, '/settings/typography')}
          isVisibleActionBox={false}
          linkHref="/settings/typography"
          linkText="Select Typography"
        />
      )}
      {uploadModalIsOpen && (
        <Modal className={`${classesModal.modal}`} onClose={closeModalHandler}>
          <Dropzone title={'Upload Logos'} limitFileSize={2} onClose={closeModalHandler} />
        </Modal>
      )}
    </div>
  );
};

export default Branding;
