const cardClassName = 'card';
const tabDataAttributeName = 'data-tab-id';

const tabClassName = `${cardClassName}__tab`;
const tabSectionClassName = `${cardClassName}__section`;

const tabSelector = `.${tabClassName}[${tabDataAttributeName}]`;
const tabSectionSelector = `.${tabSectionClassName}`;

const activeTabClassName = `${tabClassName}--active`;
const activeSectionClassName = `${tabSectionClassName}--active`;

const tabs = document.querySelectorAll(tabSelector);
const tabsSections = document.querySelector(tabSectionSelector);

const setTabActive = tab => tab && tab.classList.add(activeTabClassName);
const setTabInactive = tab => tab && tab.classList.remove(activeTabClassName);

const setSectionActive = sectionId => {
  const currentSection = document.querySelector(`${tabSectionSelector}#${sectionId}`);

  !!currentSection && currentSection.classList.add(activeSectionClassName);
};
const setSectionInactive = section => section && section.classList.remove(activeSectionClassName);

const getCurrentlyActiveTab = () => document.querySelector(`.${activeTabClassName}`);
const getCurrentlActiveSection = () => document.querySelector(`.${activeSectionClassName}`);

tabs.forEach(tab => {
  tab.addEventListener('click', () => {
    const tabSectionId = tab.getAttribute(tabDataAttributeName);

    if (tabSectionId) {
      setTabInactive(getCurrentlyActiveTab());
      setSectionInactive(getCurrentlActiveSection());
      setTabActive(tab);
      setSectionActive(tabSectionId);
    }
  });
});
