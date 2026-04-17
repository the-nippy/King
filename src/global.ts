type ModalData = Record<string, string> | null;
type SetModalFn = ((data: ModalData) => void) | null;

const G: {setGlobalModal: SetModalFn} = {
  setGlobalModal: null,
};

const setGlobalModal = (callback: SetModalFn) => {
  G.setGlobalModal = callback;
};

const showGlobalModal = (data: ModalData) => {
  G.setGlobalModal?.(data);
};

export {setGlobalModal, showGlobalModal};
// export {G};
