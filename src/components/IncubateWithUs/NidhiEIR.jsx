import React from "react";
import { Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button, useDisclosure } from "@nextui-org/react";

export default function NidhiEirInfo() {
    const { isOpen, onOpen, onOpenChange } = useDisclosure();
    return (
        <div className="flex flex-col gap-2">
            <Button className="uppercase text-sm font-bold tracking-wide bg-blue-900 text-gray-100 px-6 py-4 rounded-lg focus:outline-none focus:shadow-outline" onPress={onOpen}>More Details</Button>
            <Modal
                isOpen={isOpen}
                onOpenChange={onOpenChange}
                scrollBehavior="inside"
                size="lg"
                backdrop="blur"
            >
                <ModalContent>
                    {(onClose) => (
                        <>
                            <ModalHeader className="flex flex-col gap-1 font-semibold text-blue-900">
                                Modal Title
                            </ModalHeader>
                            <ModalBody>
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                    Nullam pulvinar risus non risus hendrerit venenatis.
                                    Pellentesque sit amet hendrerit risus, sed porttitor quam.
                                </p>
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                    Nullam pulvinar risus non risus hendrerit venenatis.
                                    Pellentesque sit amet hendrerit risus, sed porttitor quam.
                                </p>
                                <p>
                                    Magna exercitation reprehenderit magna aute tempor cupidatat
                                    consequat elit dolor adipisicing. Mollit dolor eiusmod sunt ex
                                    incididunt cillum quis. Velit duis sit officia eiusmod Lorem
                                    aliqua enim laboris do dolor eiusmod. Et mollit incididunt
                                    nisi consectetur esse laborum eiusmod pariatur proident Lorem
                                    eiusmod et. Culpa deserunt nostrud ad veniam.
                                </p>
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                    Nullam pulvinar risus non risus hendrerit venenatis.
                                    Pellentesque sit amet hendrerit risus, sed porttitor quam.
                                    Magna exercitation reprehenderit magna aute tempor cupidatat
                                    consequat elit dolor adipisicing. Mollit dolor eiusmod sunt ex
                                    incididunt cillum quis. Velit duis sit officia eiusmod Lorem
                                    aliqua enim laboris do dolor eiusmod. Et mollit incididunt
                                    nisi consectetur esse laborum eiusmod pariatur proident Lorem
                                    eiusmod et. Culpa deserunt nostrud ad veniam.
                                </p>
                                <p>
                                    Mollit dolor eiusmod sunt ex incididunt cillum quis. Velit
                                    duis sit officia eiusmod Lorem aliqua enim laboris do dolor
                                    eiusmod. Et mollit incididunt nisi consectetur esse laborum
                                    eiusmod pariatur proident Lorem eiusmod et. Culpa deserunt
                                    nostrud ad veniam. Lorem ipsum dolor sit amet, consectetur
                                    adipiscing elit. Nullam pulvinar risus non risus hendrerit
                                    venenatis. Pellentesque sit amet hendrerit risus, sed
                                    porttitor quam. Magna exercitation reprehenderit magna aute
                                    tempor cupidatat consequat elit dolor adipisicing. Mollit
                                    dolor eiusmod sunt ex incididunt cillum quis. Velit duis sit
                                    officia eiusmod Lorem aliqua enim laboris do dolor eiusmod. Et
                                    mollit incididunt nisi consectetur esse laborum eiusmod
                                    pariatur proident Lorem eiusmod et. Culpa deserunt nostrud ad
                                    veniam.
                                </p>
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                    Nullam pulvinar risus non risus hendrerit venenatis.
                                    Pellentesque sit amet hendrerit risus, sed porttitor quam.
                                </p>
                                <p>
                                    Magna exercitation reprehenderit magna aute tempor cupidatat
                                    consequat elit dolor adipisicing. Mollit dolor eiusmod sunt ex
                                    incididunt cillum quis. Velit duis sit officia eiusmod Lorem
                                    aliqua enim laboris do dolor eiusmod. Et mollit incididunt
                                    nisi consectetur esse laborum eiusmod pariatur proident Lorem
                                    eiusmod et. Culpa deserunt nostrud ad veniam.
                                </p>
                                <p>
                                    Mollit dolor eiusmod sunt ex incididunt cillum quis. Velit
                                    duis sit officia eiusmod Lorem aliqua enim laboris do dolor
                                    eiusmod. Et mollit incididunt nisi consectetur esse laborum
                                    eiusmod pariatur proident Lorem eiusmod et. Culpa deserunt
                                    nostrud ad veniam. Lorem ipsum dolor sit amet, consectetur
                                    adipiscing elit. Nullam pulvinar risus non risus hendrerit
                                    venenatis. Pellentesque sit amet hendrerit risus, sed
                                    porttitor quam. Magna exercitation reprehenderit magna aute
                                    tempor cupidatat consequat elit dolor adipisicing. Mollit
                                    dolor eiusmod sunt ex incididunt cillum quis. Velit duis sit
                                    officia eiusmod Lorem aliqua enim laboris do dolor eiusmod. Et
                                    mollit incididunt nisi consectetur esse laborum eiusmod
                                    pariatur proident Lorem eiusmod et. Culpa deserunt nostrud ad
                                    veniam.
                                </p>
                            </ModalBody>
                            <ModalFooter>
                                <Button className="uppercase text-sm font-bold tracking-wide bg-red-600 text-gray-100 px-6 py-4 rounded-lg focus:outline-none focus:shadow-outline" onPress={onClose}>
                                    Close
                                </Button>
                            </ModalFooter>
                        </>
                    )}
                </ModalContent>
            </Modal>
        </div>
    );
}
