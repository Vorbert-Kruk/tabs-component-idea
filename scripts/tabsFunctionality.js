const cardClassName = 'card';
const tabDataAttributeName = 'data-tab-id';

const tabClassName = `${cardClassName}__tab`;
const tabSectionClassName = `${cardClassName}__section`;
const tabSectionsContainerClassName = `${cardClassName}__body`;

const tabSectionsContainerSelector = `.${tabSectionsContainerClassName}`;

const tabSelector = `.${tabClassName}[${tabDataAttributeName}]`;
const tabSectionSelector = `.${tabSectionClassName}`;

const activeTabClassName = `${tabClassName}--active`;
const activeSectionClassName = `${tabSectionClassName}--active`;

const tabs = document.querySelectorAll(tabSelector);
const tabsSections = document.querySelector(tabSectionSelector);
const tabSectionsContainer = document.querySelector(tabSectionsContainerSelector);

const setTabActive = tab => tab && tab.classList.add(activeTabClassName);
const setTabInactive = tab => tab && tab.classList.remove(activeTabClassName);

const setSectionActive = sectionId => {
  const currentSection = document.querySelector(`${tabSectionSelector}#${sectionId}`);

  if (currentSection) {
    changeSectionsContainerHeight(currentSection);
    currentSection.classList.add(activeSectionClassName);
  }
};
const setSectionInactive = section => section && section.classList.remove(activeSectionClassName);

const getCurrentlyActiveTab = () => document.querySelector(`.${activeTabClassName}`);
const getCurrentlyActiveSection = () => document.querySelector(`.${activeSectionClassName}`);

const getSectionHeight = section => section && section.getBoundingClientRect().height;
const changeSectionsContainerHeight = section =>
  (tabSectionsContainer.style.height = `${getSectionHeight(section)}px`);

const changeTab = tab => {
  const tabSectionId = tab.getAttribute(tabDataAttributeName);

  if (tabSectionId) {
    setTabInactive(getCurrentlyActiveTab());
    setSectionInactive(getCurrentlyActiveSection());
    setTabActive(tab);
    setSectionActive(tabSectionId);
  }
};

(() => {
  tabs.forEach(tab => {
    tab.addEventListener('click', () => {
      changeTab(tab);
    });
  });

  changeTab(getCurrentlyActiveTab());
})();
