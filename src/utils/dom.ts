export const observeDomElementMutation = (
  selector: string,
  opt: MutationObserverInit,
  callback: (m?: MutationRecord) => void
) => {
  const observer = new MutationObserver((m) => [...m].forEach(callback));

  document
    .querySelectorAll(selector)
    .forEach((el) => observer.observe(el, opt));

  return observer;
};
